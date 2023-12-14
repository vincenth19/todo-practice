import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { TodoItem } from "@/lib/types";

// Define a type for the slice state
interface TodosState {
  items: TodoItem[];
}

// Define the initial state using that type
const initialState: TodosState = {
  items: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoItem>) => {
      state.items = [...state.items, action.payload];
    },
    toggle: (state, action: PayloadAction<string>) => {
      state.items = state.items.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isChecked: !todo.isChecked };
        } else {
          return todo;
        }
      });
    },
    remove: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (todo) => todo.id === action.payload
      );
      state.items = state.items.toSpliced(itemIndex, 1);
    },
  },
});

export const { create, toggle, remove } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todos.items;

export default todosSlice.reducer;
