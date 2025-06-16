import Generator, { type GeneratorOptions, Problem } from "./generator";
import Player from "./player";

export default class Room {
  id: string;
  generator: Generator;
  problems: Problem[];
  players: Player[];

  constructor(id: string, options: GeneratorOptions) {
    this.id = id;
    this.generator = new Generator(options);
    this.problems = [];
    this.players = [];
  }
}