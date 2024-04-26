import AsyncStorage from "@react-native-async-storage/async-storage"
import { createSlice } from "@reduxjs/toolkit"

interface TodosState {
  todos: string[]
  loading: boolean
}

const initialState: TodosState = {
  todos: [],
  loading: false,
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getCategoriesData: (state, action) => {
      state.todos = action.payload
    },

    addCategory: (state, action) => {
      state.todos.push(action.payload)
      // Simpan ke local storage setelah menambah kategori
      AsyncStorage.setItem("categories", JSON.stringify(state.todos))
    },

    getListsData: (state, action) => {
      state.todos = action.payload
    },

    addList: (state, action) => {
      state.todos.push(action.payload)
      // AsyncStorage.setItem("lists", JSON.stringify(state.todos))
    },

    removeList: (state, action) => {
      state.todos = state.todos.filter((item) => item.title !== action.payload.title)
      AsyncStorage.setItem("lists", JSON.stringify(state.todos))
    },
  },
})

export const { getCategoriesData, addCategory, getListsData, addList, removeList } =
  todoSlice.actions
export default todoSlice.reducer
