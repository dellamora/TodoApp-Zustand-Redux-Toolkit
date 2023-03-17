import { type NextPage } from "next";
import { useState } from 'react';
import { useTodoStore } from '../zustand/store';


const Home: NextPage = () => {
    const [text, setText] = useState('');

    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodo(text);
      setText('');
    };
    return (
    <>
      <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            My <span className="text-[hsl(280,100%,70%)]">TODO</span> App
          </h1> 

          <form onSubmit={handleSubmit} className='text-white items-center flex space-x-2'>
        <input
        placeholder="Enter a new task..." className="bg-transparent border-#15162c border rounded py-1 px-4" type="text"
          
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
              <button  type="submit">
      <svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
     </svg>
      </button>
      </form>
      <ul className='text-white space-y-6 text-2xl'>
        {todos.map((todo) => (
          <li 
           className={` ${todo.completed? "line-through" : "none"} bg-[#cc66ff12] rounded p-2 min-w-[400px] flex justify-between items-center `}
           key={todo.id}
          >
            <input
              className="w-4 h-4"              
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
              {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>
            <svg 
           xmlns="http://www.w3.org/2000/svg" 
           width="35" 
           height="35" 
           viewBox="0 0 24 24" 
           stroke-width="1.5" 
           stroke="#ffffff" 
           fill="none" 
           stroke-linecap="round" 
           stroke-linejoin="round"
          >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
            </button>
          </li>
        ))}
      </ul>
        </div>
      </main>
    </>
  );
};

export default Home;



