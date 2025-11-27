import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-screen flex flex-col gap-3 items-center justify-center text-center text-slate-700">
        <p className="text-3xl font-bold text-green-900 uppercase">Wealcome </p>
        <p className="text-4xl font-bold">Only For desktop</p>  
        <h1 className="text-6xl font-bold ">This is Chat Appliaction app Demo Project</h1>
        <Link href={'/chat'}>
          <button className="bg-slate-200 px-7 py-3 rounded  cursor-pointer font-bold">Click to Chat</button>
        </Link>
      </section>
    </main>
  );
}
