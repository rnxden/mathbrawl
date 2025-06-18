import { type Player } from "@/modules/player/types";
import { type Problem } from "@/modules/problem/types";
import { type RoomOptions, type Room } from "@/modules/room/types";

const rooms = new Map<string, Room>();

class RoomInMemory implements Room {
  readonly id: string;
  started: boolean;
  options: RoomOptions;
  problems: Problem[];
  players: Player[];

  constructor(data: Room) {
    this.id = data.id;
    this.options = data.options;
    this.started = data.started;
    this.problems = data.problems;
    this.players = data.players;
  }
}

export function saveRoom(data: Room): Room {
  const room = new RoomInMemory(data);
  rooms.set(room.id, room);
  return room;
}

export function deleteRoom(id: string): boolean {
  if (!findRoom(id)) return false;
  rooms.delete(id);
  return true;
}

export function findRoom(id: string): Room | undefined {
  return rooms.get(id);
}
