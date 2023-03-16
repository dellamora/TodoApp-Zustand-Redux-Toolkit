/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, toggleTodo, deleteTodo } from '../store/todoSlice';
import { type Todo } from '../types/interfaces';
import AddTodo from './addTodo';
import TodoList from './todoList';

const TodoApp: React.FC = () => {
  const todos = useSelector((state: any | null) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo: Todo) => {
    dispatch(addTodo(todo));
  };

  const handleEditTodo = (todo: Todo) => {
    dispatch(editTodo(todo));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onEdit={handleEditTodo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
