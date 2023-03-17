export interface Todo {
  id: number;
  task?: string;
  completed: boolean;
}
export interface TodoState {
  todos: Todo[];
}
export interface TodoStateZustand {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
export interface RootState {
  todos: {
    todos: Todo[];
  };
}
