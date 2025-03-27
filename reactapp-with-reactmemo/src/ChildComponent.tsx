import React from "react";

interface TodosComponentProps {
  todos: string[];
}
const Todos = ({ todos }: TodosComponentProps) => {
  console.log("[Child re-render]");
  return (
    <>
      <h4>My Todos</h4>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

// export default Todos;
export default React.memo(Todos);
