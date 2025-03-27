import { useCallback, useState } from "react";
import "./App.css";
import Todos from "./ChildComponent";

function App() {
  const [todos, setTodos] = useState<Array<string>>([]);
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos([...todos, "new Todo"]);
  // };
  const addTodo = useCallback(() => {
    setTodos([...todos, "new Todo"]);
  }, [todos]);

  return (
    <div className="App">
      <button onClick={increment}>Increment value </button>
      <div>{count}</div>
      <div> ------------------------------------------ </div>
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
