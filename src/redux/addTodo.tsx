import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './slice';

export const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() === '') {
      return;
    }
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='text-white items-center flex space-x-2'>
      <input placeholder="Enter a new task..." className="bg-transparent border-#15162c border rounded py-1 px-4" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button  type="submit">
      <svg xmlns="http://www.w3.org/2000/svg"  width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
     </svg>


      </button>
    </form>
  );
};

export default AddTodoForm;