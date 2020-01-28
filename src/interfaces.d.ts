export type TokenType = 'operator' | 'literal' | 'number' | 'lparen' | 
  'rparen' | 'function';

export interface MathConstants {
  E: number;
  LN2: number;
  LN10: number;
  LOG2E: number;
  LOG10E: number;
  PI: number;
  SQRT1_2: number;
  SQRT2: number;
}

export interface MathFunctions {
  // Trigonometric functions
  sin: (angle: string) => number;
  cos: (angle: string) => number;
  tan: (angle: string) => number;
  cot: (angle: string) => number;
  sec: (angle: string) => number;
  cosec: (angle: string) => number;

  // Logarithmic function(s)
  log: (number: number, base: string) => number;
}

export interface Token {
  type: TokenType;
  value: string;
}
