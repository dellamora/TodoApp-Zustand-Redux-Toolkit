export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
export interface TodoState {
    todos: Todo[];
  }

  
  export interface RootState {
    todos: {
      todos: Todo[];
    };
  }