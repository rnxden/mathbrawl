import { Problem } from "./generator";

export default class Player {
  name: string;
  ready: boolean;
  solved: number;

  constructor(name: string) {
    this.name = name;
    this.ready = false;
    this.solved = 0;
  }
}