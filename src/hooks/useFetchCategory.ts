import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../libs/Store"
import { useEffect } from "react"
import { getCategoriesData } from "../features/todos/todosSlice"

const useFetchCategory = () => {
  const dispatch = useDispatch()
  const categoriesData = useSelector((state: RootState) => state.app.todos)

  const loadCategoriesFromLocalStorage = async () => {
    const savedCategories = await AsyncStorage.getItem("categories")
    if (savedCategories) {
      const parsedCategories = JSON.parse(savedCategories)
      // Pastikan bahwa dispatch(getCategoriesData()) memperbarui state dengan benar
      dispatch(getCategoriesData(parsedCategories))
    }
  }

  useEffect(() => {
    loadCategoriesFromLocalStorage()
  }, [dispatch])

  return {
    loadCategoriesFromLocalStorage,
    categoriesData,
  }
}

export default useFetchCategory
