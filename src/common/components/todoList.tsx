import React from 'react';
import { type Todo } from '../types/interfaces';

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => console.log("not ready yet")} />
          {todo.title}
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
