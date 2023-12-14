"use client";

import { useAppSelector } from "@/lib/hooks";
import TodoItem from "./todoItem";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  console.log(JSON.stringify(todos.items, null, 2));
  return (
    <>
      {todos.items.length > 0 ? (
        todos.items.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })
      ) : (
        <p style={{ padding: "20px 0" }}>enter your activity</p>
      )}
    </>
  );
};

export default TodoList;
