import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "../../types/TodoTypes"
import { FilterOptions } from "../../types/AppTypes"

interface TodoState {
  list: Todo[]
  filter: FilterOptions
  completeCount: number
  uncompleteCount: number
}

const initialState: TodoState = {
  list: [],
  filter: "all",
  completeCount: 0,
  uncompleteCount: 0,
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>): void => {
      const newTodo: Todo = {
        id: state.list.length + 1,
        text: action.payload,
        completed: false,
      }
      state.list.push(newTodo)
      state.uncompleteCount += 1
    },
    toggleTodo: (state, action: PayloadAction<number>): void => {
      const todo = state.list.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed

        if (todo.completed) {
          state.uncompleteCount -= 1
          state.completeCount += 1
        } else {
          state.uncompleteCount += 1
          state.completeCount -= 1
        }
      }
    },
    setFilter: (
      state,
      action: PayloadAction<FilterOptions>,
    ): void => {
      state.filter = action.payload
    },
  },
})

export const { addTodo, toggleTodo, setFilter } = todoSlice.actions

export const selectTodos = (state: { todos: TodoState }): Todo[] =>
  state.todos.list
export const selectFilter = (state: {
  todos: TodoState
}): FilterOptions => state.todos.filter
export const getCounterTodos = (state: {
  todos: TodoState
}): {
  completeCount: number
  uncompleteCount: number
} => {
  return {
    completeCount: state.todos.completeCount,
    uncompleteCount: state.todos.uncompleteCount,
  }
}

export default todoSlice.reducer
