"use client";

import { useRouter } from "next/navigation";
import { createRoom } from "./modules/rooms";

export default function Home() {

  const router = useRouter();

  const handleCreateRoom = () => {
    const room = createRoom();
    const roomId = room.id;
    router.push(`/rooms/${roomId}`);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl">Math Brawl</h1>
      <div className="flex flex-col items-center gap-4">
        <button onClick={ handleCreateRoom } className="px-16 py-2 border border-white hover:bg-white/25 cursor-pointer text-xl">Create Room</button>
        <button className="px-16 py-2 border border-white hover:bg-white/25 cursor-pointer text-xl">Join Room</button>
      </div>
      <div className="flex flex-col items-center gap-2">
      </div>
    </div>
  );
}
