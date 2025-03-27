import { useState } from "react";
import "./App.css";
import Todos from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="App">
      <button onClick={increment}> Increment Value </button>
      <div>{count}</div>
      <div>---------------------------------------</div>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
