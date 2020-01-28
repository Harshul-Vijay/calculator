import { Evaluator } from './logic/evaluator';

export const evaluate = async (expression: string) => {
  const answer = new Evaluator(expression).result;
  return answer;
};
