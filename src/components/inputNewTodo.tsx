"use client";
import { create } from "@/lib/features/todos/todosSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";

const InputNewTodo = () => {
  const [newTodo, setNewTodo] = useState("");

  const onChangeNewTodo = (newValue: string) => {
    setNewTodo(newValue);
  };

  const dispath = useAppDispatch();

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 2rem",
      }}
      action={(formData) => {
        formData.get("new-todo") &&
          dispath(
            create({
              id: new Date().toISOString(),
              isChecked: false,
              text: formData.get("new-todo")!.toString(),
            })
          );
        setNewTodo("");
      }}
    >
      <input
        value={newTodo}
        onChange={(e) => {
          onChangeNewTodo(e.target.value);
        }}
        name="new-todo"
        type="text"
        placeholder="Your todo..."
      />
      <span style={{ paddingLeft: "10px" }}></span>
      <button type="submit">Add</button>
    </form>
  );
};

export default InputNewTodo;
