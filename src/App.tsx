import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodosProvider } from "./hooks/useTodos";
import "./styles/globals.scss";

function App() {
  return (
    <TodosProvider>
      <Header />
      <TodoList />
    </TodosProvider>
  );
}

export default App;
