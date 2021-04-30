import { createContext, ReactNode, useContext, useState } from "react";

interface TodosProps {
  id: number;
  text: string;
  date: string;
  isCompleted: boolean;
}

interface ProviderProps {
  children: ReactNode;
}

interface TodosContextData {
  todos: TodosProps[];
  createTodo: (todo: TodosProps) => Promise<void>;
  toggleComplete: (id: number) => Promise<void>;
}

const TodosContext = createContext<TodosContextData>({} as TodosContextData);

export function TodosProvider({ children }: ProviderProps) {
  const [todos, setTodos] = useState<TodosProps[]>([]);

  async function createTodo(todo: TodosProps) {
    setTodos([...todos, todo]);
  }

  async function toggleComplete(id: number) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  }

  return (
    <TodosContext.Provider value={{ todos, createTodo, toggleComplete }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  return context;
}
