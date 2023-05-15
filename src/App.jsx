import { TodoProvider } from "./hooks/Todocontext";
import LayOut from "./page/layout";

const App = () => {

  

  return (
    <TodoProvider>
      <LayOut />
    </TodoProvider>
  );
}

export default App;
