import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slice";

export const AddTodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.trim() === "") {
      return;
    }
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 text-white"
    >
      <input
        placeholder="Enter a new task..."
        className="border-#15162c rounded border bg-transparent py-1 px-4"
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      </button>
    </form>
  );
};

export default AddTodoForm;
