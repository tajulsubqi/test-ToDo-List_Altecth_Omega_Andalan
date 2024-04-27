import AsyncStorage from "@react-native-async-storage/async-storage"
import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const storedCategories = await AsyncStorage.getItem("categories")
    if (storedCategories !== null) {
      return JSON.parse(storedCategories)
    } else {
      return [] // Kembalikan array kosong jika tidak ada data
    }
  },
)

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (newCategory) => {
    // Ambil data kategori yang sudah ada dari AsyncStorage
    const storedCategories = await AsyncStorage.getItem("categories")
    let categories = []
    if (storedCategories !== null) {
      categories = JSON.parse(storedCategories)
    }

    // Tambahkan kategori baru ke array kategori
    categories.push(newCategory)

    // Simpan kembali array kategori yang sudah diperbarui ke AsyncStorage
    await AsyncStorage.setItem("categories", JSON.stringify(categories))

    return categories // Kembalikan array kategori yang sudah diperbarui
  },
)

// export const createList = createAsyncThunk("lists/createList", async (newList) => {
//   const storedLists = await AsyncStorage.getItem("lists")
//   let lists = []
//   if (storedLists !== null) {
//     lists = JSON.parse(storedLists)
//   }

//   lists.push(newList)

//   await AsyncStorage.setItem("lists", JSON.stringify(lists))
//   return lists
// })

export const createList = createAsyncThunk(
  "lists/createList",
  async ({
    title,
    description,
    category,
  }: {
    title: string
    description: string
    category: any
  }) => {
    try {
      // Get existing data from AsyncStorage
      const existingData = await AsyncStorage.getItem("lists")
      let lists: any[] = []

      // If data exists, parse it into an array
      if (existingData !== null) {
        lists = JSON.parse(existingData)
      }

      // Add new data to the array
      lists.push({ title, description, category })

      // Save the updated data back to AsyncStorage
      await AsyncStorage.setItem("lists", JSON.stringify(lists))

      return lists
    } catch (error) {
      // Throw error if failed to add list
      throw new Error("Failed to add list: " + error)
    }
  },
)

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.todos = action.payload
        state.loading = false
      })

      // Add category
      .addCase(createCategory.fulfilled, (state, action) => {
        state.todos = action.payload
      })

      // Add list
      .addCase(createList.fulfilled, (state, action) => {
        state.todos = action.payload
      })
  },

  reducers: {
    getCategories: (state, action) => {
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
      AsyncStorage.setItem("lists", JSON.stringify(state.todos))
    },

    removeList: (state, action) => {
      state.todos = state.todos.filter((item) => item.title !== action.payload.title)
      AsyncStorage.setItem("lists", JSON.stringify(state.todos))
    },
  },
})

export const { getCategories, addCategory, getListsData, addList, removeList } =
  todoSlice.actions
export default todoSlice.reducer
