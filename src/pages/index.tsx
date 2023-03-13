import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            My <span className="text-[hsl(280,100%,70%)]">TODO</span> App
          </h1> 
          <form>
            <input placeholder="Enter a new task..." className="bg-transparent border-#15162c border rounded"/>
            <button className="ml-2">add</button>
            <ul>
              <li>oioi</li>
            </ul>
          </form>

        </div>
      </main>
    </>
  );
};

export default Home;
