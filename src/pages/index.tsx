import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex  min-h-screen items-center justify-center  space-x-10 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-5xl font-extrabold  tracking-tight text-white sm:text-[5rem]">
        <Link href="/redux" className="">
          Redux
        </Link>
        <h1 className="text-[hsl(280,100%,70%)] ">VS</h1>
        <Link href="/zustand">Zustand</Link>
      </main>
    </>
  );
};

export default Home;
