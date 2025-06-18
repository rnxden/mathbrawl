import { type Player } from "@/modules/player/types";
import { type Problem } from "@/modules/problem/types";

export enum RoomMode {
  Time = "time",
  Goal = "goal",
}

export interface OperatorOptions {
  freq: number;
  min: number;
  max: number;
}

export interface RoomOptions {
  mode: RoomMode;
  time: number;
  goal: number;

  add: OperatorOptions;
  sub: OperatorOptions;
  mul: OperatorOptions;
  div: OperatorOptions;
}

export interface Room {
  readonly id: string;
  started: boolean;
  options: RoomOptions;
  problems: Problem[];
  players: Player[];
}
