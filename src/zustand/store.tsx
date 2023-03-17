import create from 'zustand';
import { type TodoStateZustand } from '~/common/interfaces';



export const useTodoStore = create<TodoStateZustand>((set) => ({
  todos: [],
  addTodo: (task: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          task,
          completed: false,
        },
      ],
    }));
  },
  toggleTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  deleteTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));
