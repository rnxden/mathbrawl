"use server";

import { createRoom as svcCreateRoom } from "@/modules/room/service";

export async function createRoom(): Promise<{ id: string }> {
  const room = svcCreateRoom();
  return { id: room.id };
}
