import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl">Math Brawl</h1>
      <div className="flex flex-col items-center gap-4">
        <button className="px-16 py-2 border border-white hover:bg-white/25 cursor-pointer text-xl">Create Room</button>
        <button className="px-16 py-2 border border-white hover:bg-white/25 cursor-pointer text-xl">Join Room</button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link className="text-blue-200" href="/rooms/abc">room abc</Link>
        <Link className="text-blue-200" href="/rooms/def">room def</Link>
      </div>
    </div>
  );
}
