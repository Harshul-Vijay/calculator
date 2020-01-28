import { Parser } from "./parser";
import { Stack, precedence } from "./helpers";

/**
 * Converts a given mathematical expression to postfix (Reverse Polish 
 * Notation).
 * 
 * @param {string} expr The expression to convert into postfix.
 */
export class Postfix {
  /**
   * The postfix expression.
   */
  postfix: Array<string>;

  constructor(expr: string) {
    // Create operator, function and output stacks
    const opStack = new Stack();
    const fnStack = new Stack();
    const outStack = new Stack();
    // Get the tokens generated by the Parser
    const tokens = new Parser(expr).tokens;

    tokens.map(token => {
      if (token.type === 'number') {
        outStack.push(+token.value);
      } else if (token.type === 'literal') {
        outStack.push(token.value);
      } else if (token.type === 'function') {
        fnStack.push(token.value);
      } else if (token.type === 'operator') {
        let last = opStack.peekAtLast();
        let precLast = precedence[last];
        const precToken = precedence[token.value];
        // NOTE: Do NOT remove the following code that has been commented 
        // intentionally, as it is kinda like a backup.
        /*
          const assocToken = associativity[token.value];
          while ((assocToken === 'left' && precLast >= precToken)
            || (assocToken === 'right' && precLast > precToken)) {
            outStack.push(opStack.pop());
            last = opStack.peekAtLast();
            precLast = precedence[last];
          }
        */
        while (precLast >= precToken) {
          outStack.push(opStack.pop());
          last = opStack.peekAtLast();
          precLast = precedence[last];
        }
        opStack.push(token.value);
      } else if (token.type === 'lparen') {
        opStack.push(token.value);
      } else if (token.type === 'rparen') {
        let char = null;
        while (char !== '(') {
          char = opStack.pop();
          if (char !== '(') {
            outStack.push(char);
          }
        }
        !fnStack.isEmpty() && outStack.push(fnStack.pop());
      }
    });
    while (!opStack.isEmpty()) {
      outStack.push(opStack.pop());
    }
    while (!fnStack.isEmpty()) {
      outStack.push(fnStack.pop());
    }

    this.postfix = outStack.contents;
  }
}