import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todos/todosSlice"
import { useDispatch, useSelector } from "react-redux"
import categoriesReducer from "../features/todos/categoriesSlice"
import listsReducer from "../features/todos/listsSlice"

export const store = configureStore({
  reducer: {
    app: todoReducer,
    // categories: categoriesReducer,
    // lists: listsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
