import React from "react";

interface TodoComponentProps {
  todos: string[],
  addTodo: () => void;
}

// Child-component
const Todos = function({ todos, addTodo }: TodoComponentProps) {
  console.log("[Child re-rendered]");
  return (
    <>
      <h4>My Todos</h4>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    
    </>
  );
};

export default React.memo(Todos)