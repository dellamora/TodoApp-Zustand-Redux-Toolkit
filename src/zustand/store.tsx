import create from 'zustand';
import { type TodoStateZustand} from '~/common/interfaces';

const useTodoStore = create<TodoStateZustand>(set => ({
  todos: [],
  addTodo: (text: string) => 
  set(state => ({
     todos: [...state.todos, { id: state.todos.length + 1, task: text, completed: false }] 
    })),
  toggleTodo: id =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: id =>
    set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
}));

export default useTodoStore;
