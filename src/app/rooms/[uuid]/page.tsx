import Link from "next/link";

interface PageParams {
  uuid: string;
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  let { uuid } = await params;

  return (
    <div>
      <h1>this is room '{uuid}'</h1>
      <Link className="text-blue-200" href="/">back</Link>
    </div>
  );
}