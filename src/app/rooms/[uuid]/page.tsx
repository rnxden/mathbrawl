import Link from "next/link";
interface PageParams {
  uuid: string;
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  let { uuid } = await params;


  return (
    <div>
      <h1>this is room '{uuid}'</h1>
      <br></br>
      <h2>options:</h2>
      <a>Mode:mode</a>
      <a>Time: 1 second</a>
      <a>a</a>
      <Link className="flex flex-col items-center text-blue-200" href="/">back</Link>
    </div>
  );
}