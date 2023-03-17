import { type NextPage } from "next";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <Link href="/redux" className="text-white text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
            Redux
          </Link>
          <Link href="/zustand"  className="text-[hsl(280,100%,70%)] text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
            Zustand
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
