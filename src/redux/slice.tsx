
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type TodoState } from '~/common/interfaces';

const initialState: TodoState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const id = state.todos.length + 1;
      state.todos.push({ id, task: action.payload, completed: false });
    },
    editTodo: (state, action: PayloadAction<{ id: number; task: string }>) => {
      const { id, task } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
