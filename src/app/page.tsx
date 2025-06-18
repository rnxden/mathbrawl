"use client";

import { createRoom } from "@/actions/room";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCreateRoom = async () => {
    const { id } = await createRoom();
    router.push(`/rooms/${id}`);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Math Brawl</h1>
      <div className="flex flex-col items-center gap-4">
        <button
          className="cursor-pointer border border-white px-16 py-2 text-xl hover:bg-white/25"
          onClick={handleCreateRoom}
        >
          Create Room
        </button>
        <button className="cursor-pointer border border-white px-16 py-2 text-xl hover:bg-white/25">Join Room</button>
      </div>
      <div className="flex flex-col items-center gap-2"></div>
    </div>
  );
}
