import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  let { id } = await params;

  return (
    <div>
      <h1>this is room '{id}'</h1>
      <Link className="text-blue-200" href="/">
        back
      </Link>
    </div>
  );
}
