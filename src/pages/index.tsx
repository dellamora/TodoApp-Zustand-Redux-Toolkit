import { type NextPage } from "next";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <>
      <main className="text-white  text-5xl font-extrabold tracking-tight  sm:text-[5rem] flex min-h-screen space-x-10 items-center justify-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <Link href="/redux" className="">
            Redux
          </Link>
          <h1 className="text-[hsl(280,100%,70%)] ">VS</h1>
          <Link href="/zustand"  >
            Zustand 
          </Link>
      </main>
    </>
  );
};

export default Home;
