import { TodoProvider } from "./hooks/useTodoContext";
import LayOut from "./page/layout";

const App = () => {
  return (
    <TodoProvider>
      <LayOut />
    </TodoProvider>
  );
}

export default App;
