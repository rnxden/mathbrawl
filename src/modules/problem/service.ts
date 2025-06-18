import { randomInt } from "crypto";
import { type Problem, Operator } from "@/modules/problem/types";
import { type Room } from "@/modules/room/types";

function getFactors(num: number): number[] {
  let factors = [];
  for (let k = 1; k * k <= num; k++) if (num % k === 0) factors.push(k, num / k);
  return factors;
}

function generateAddProblem(room: Room): Problem {
  const a = randomInt(room.options.add.min, room.options.add.max + 1);
  const b = randomInt(room.options.add.min, room.options.add.max + 1);
  return { op: Operator.Add, a, b };
}

function generateSubProblem(room: Room): Problem {
  const a = randomInt(room.options.sub.min, room.options.sub.max + 1);
  const b = randomInt(room.options.sub.min, room.options.sub.max + 1);
  return { op: Operator.Sub, a, b };
}

function generateMulProblem(room: Room): Problem {
  const a = randomInt(room.options.mul.min, room.options.mul.max + 1);
  const b = randomInt(room.options.mul.min, room.options.mul.max + 1);
  return { op: Operator.Mul, a, b };
}

function generateDivProblem(room: Room): Problem {
  const a = randomInt(room.options.div.min, room.options.div.max + 1);
  const af = getFactors(a);
  const b = af[randomInt(af.length)];
  return { op: Operator.Add, a, b };
}

export function generateProblem(room: Room): Problem {
  let total = room.options.add.freq + room.options.sub.freq + room.options.mul.freq + room.options.div.freq;
  let weight = randomInt(total);

  if (weight < room.options.add.freq) return generateAddProblem(room);
  else weight -= room.options.add.freq;

  if (weight < room.options.sub.freq) return generateSubProblem(room);
  else weight -= room.options.sub.freq;

  if (weight < room.options.mul.freq) return generateMulProblem(room);
  else weight -= room.options.mul.freq;

  if (weight < room.options.div.freq) return generateDivProblem(room);
  else weight -= room.options.div.freq;

  throw new Error("unreachable");
}

export function generateProblemAndFill(room: Room): Problem {
  const problem = generateProblem(room);
  room.problems.push(problem);
  return problem;
}
