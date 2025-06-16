function randomInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

type Operand = "add" | "sub" | "mul" | "div";

export class Problem {
  operand: Operand;
  operand1: number;
  operand2: number;
  solution: number;

  constructor(operand: Operand, operand1: number, operand2: number) {
    this.operand = operand;
    this.operand1 = operand1;
    this.operand2 = operand2;

    switch (this.operand) {
      case "add":
        this.solution = this.operand1 + this.operand2;
      case "sub":
        this.solution = this.operand1 - this.operand2;
      case "mul":
        this.solution = this.operand1 * this.operand2;
      case "div":
        this.solution = this.operand1 / this.operand2;
      default:
        throw new Error("Invalid operand");
    }
  }
}

export interface GeneratorOptions {
  mode: "time" | "goal";
  timeMs: number;
  goalNum: number;

  addEnabled: boolean;
  addChance: number;
  addOperandMin: number;
  addOperandMax: number;

  subEnabled: boolean;
  subChance: number;
  subOperandMin: number;
  subOperandMax: number;

  mulEnabled: boolean;
  mulChance: number;
  mulOperandMin: number;
  mulOperandMax: number;

  divEnabled: boolean;
  divChance: number;
  divOperandMin: number;
  divOperandMax: number;
}

export default class Generator {
  options: GeneratorOptions;

  constructor(options: GeneratorOptions) {
    this.options = options;

    if (!this.options.addEnabled)
      this.options.addChance = 0;
    if (!this.options.subEnabled)
      this.options.subChance = 0;
    if (!this.options.mulEnabled)
      this.options.mulChance = 0;
    if (!this.options.divEnabled)
      this.options.divChance = 0;
  }

  generateAdd(): Problem {
    let operand1 = randomInt(this.options.addOperandMin, this.options.addOperandMax);
    let operand2 = randomInt(this.options.addOperandMin, this.options.addOperandMax);
    return new Problem("add", operand1, operand2);
  }

  generateSub(): Problem {
    let operand1 = randomInt(this.options.subOperandMin, this.options.subOperandMax);
    let operand2 = randomInt(this.options.subOperandMin, this.options.subOperandMax);
    return new Problem("sub", operand1, operand2);
  }

  generateMul(): Problem {
    let operand1 = randomInt(this.options.mulOperandMin, this.options.mulOperandMax);
    let operand2 = randomInt(this.options.mulOperandMin, this.options.mulOperandMax);
    return new Problem("mul", operand1, operand2);
  }

  generateDiv(): Problem {
    let operand1 = randomInt(this.options.divOperandMin, this.options.divOperandMax);

    let factors = [];
    for (let k = 1; k * k <= operand1; k++) {
      if (operand1 % k == 0) {
        factors.push(k);
        factors.push(operand1 % k);
      }
    }

    let operand2 = factors[randomInt(0, factors.length - 1)];

    return new Problem("div", operand1, operand2);
  }

  generate() {
    let totalWeights = this.options.addChance
      + this.options.subChance
      + this.options.mulChance
      + this.options.divChance;
    let weight = Math.random() * totalWeights;

    if (weight < this.options.addChance) {
      return this.generateAdd();
    } else {
      weight -= this.options.addChance;
    }

    if (weight < this.options.subChance) {
      return this.generateSub();
    } else {
      weight -= this.options.subChance;
    }

    if (weight < this.options.mulChance) {
      return this.generateMul();
    } else {
        weight -= this.options.mulChance;
    }

    if (weight < this.options.divChance) {
        return this.generateDiv();
    } else {
        weight -= this.options.divChance;
    }
  }
}