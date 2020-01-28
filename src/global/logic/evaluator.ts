import { Postfix } from "./postfix";
import { functions, Stack } from "./helpers";

export class Evaluator {
  protected _result: number = 0;

  constructor(expr: string) {
    const postfix = new Postfix(expr).postfix;
    const stack = new Stack();
    postfix.map(token => {
      if (typeof token === 'number') {
        stack.push(token);
      } else if (typeof token === 'string' && token.length === 1) {
        const op2 = stack.pop();
        const op1 = stack.pop();
        let res = 0;
        if (token === '+') {
          res = op1 + op2;
        } else if (token === '-') {
          res = op1 - op2;
        } else if (token === '*') {
          res = op1 * op2;
        } else if (token === '/') {
          res = op1 / op2;
        } else if (token === '^') {
          res = Math.pow(op1, op2);
        }
        stack.push(res);
      } else if (typeof token === 'string' && token.length > 1 &&
        token !== "NaN") {
        if (!!functions[token]) {
          const op1 = stack.pop();
          const res = functions[token](op1 + ``);
          stack.push(res);
        } else {
          throw new Error(`Undefined function '${token}'`);
        }
      }
    });
    this._result = stack.reduce((prev, curr) => {
      return prev + curr;
    });
  }

  get result() {
    return this._result;
  }
}
