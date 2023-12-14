"use client";

import { remove, toggle } from "@/lib/features/todos/todosSlice";
import { useAppDispatch } from "@/lib/hooks";
import { TodoItem } from "@/lib/types";

const TodoItem = ({ id = "", isChecked = false, text = "" }: TodoItem) => {
  const dispatch = useAppDispatch();

  const onToggle = (todoId: string) => {
    dispatch(toggle(todoId));
  };

  const onDelete = (todoId: string) => {
    dispatch(remove(todoId));
  };

  return (
    <div style={{ padding: "5px 0" }}>
      <span style={{ paddingRight: "5px", width: "80%" }}>{text}</span>
      <span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onToggle(id)}
        />
        <span style={{ padding: "0 5px" }}></span>
        <button
          style={{ backgroundColor: "maroon" }}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
