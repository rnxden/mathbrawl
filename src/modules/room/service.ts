import { randomInt } from "crypto";
import { findRoom, saveRoom } from "@/modules/room/repository";
import { type Room, RoomMode } from "@/modules/room/types";

function randomId(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) result += chars[randomInt(chars.length) % chars.length];
  return result;
}

function randomIdUnused(length: number): string {
  while (true) {
    const id = randomId(length);
    if (findRoom(id)) continue;
    return id;
  }
}

export function createRoom(): Room {
  const data: Room = {
    id: randomIdUnused(8),
    started: false,
    options: {
      mode: RoomMode.Time,
      time: 60 * 1000,
      goal: 15,

      add: {
        freq: 0,
        min: 0,
        max: 0,
      },

      sub: {
        freq: 0,
        min: 0,
        max: 0,
      },

      mul: {
        freq: 0,
        min: 0,
        max: 0,
      },

      div: {
        freq: 0,
        min: 0,
        max: 0,
      },
    },
    problems: [],
    players: [],
  };

  return saveRoom(data);
}
