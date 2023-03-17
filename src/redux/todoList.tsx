import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from './store';
import { toggleTodo, deleteTodo } from './slice';

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul className='text-white space-y-6 text-2xl'>
      {todos.map((todo) => (
        <li key={todo.id} 
         className={` ${todo.completed? "line-through" : "none"} bg-[#cc66ff12] rounded p-2 min-w-[400px] flex justify-between items-center `}               
        >
          <input
            className="w-4 h-4 "
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          {todo.title}
          <button  onClick={() => handleDeleteTodo(todo.id)} >
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
  );
};

export default TodoList;