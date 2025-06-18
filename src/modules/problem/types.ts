export enum Operator {
  Add = "add",
  Sub = "sub",
  Mul = "mul",
  Div = "div",
}

export interface Problem {
  op: Operator;
  a: number;
  b: number;
}
