import { v4 } from "uuid";
import Room from "./room";

export function createRoom(): Room {
  let roomId = v4();
  return new Room(roomId, {
    mode: "time",
    timeMs: 60000,
    goalNum: 0,
    addEnabled: false,
    addChance: 0,
    addOperandMin: 0,
    addOperandMax: 0,
    subEnabled: false,
    subChance: 0,
    subOperandMin: 0,
    subOperandMax: 0,
    mulEnabled: false,
    mulChance: 0,
    mulOperandMin: 0,
    mulOperandMax: 0,
    divEnabled: false,
    divChance: 0,
    divOperandMin: 0,
    divOperandMax: 0,
  });
}

export function checkRoom() {

}

export function deleteRoom() {

}

export function joinRoom() {

}