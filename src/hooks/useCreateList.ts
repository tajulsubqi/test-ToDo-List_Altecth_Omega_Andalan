import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"

const useCreateList = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const handleAddList = async () => {
    // Get existing data from AsyncStorage
    const existingData = await AsyncStorage.getItem("lists")
    let lists = []

    // If data exists, parse it into an array
    if (existingData !== null) {
      lists = JSON.parse(existingData)
    }

    // Add new data to the array
    lists.push({ title, description, category })

    // Save the updated data back to AsyncStorage
    await AsyncStorage.setItem("lists", JSON.stringify(lists))

    setTitle("")
    setDescription("")
    setCategory("")

    // Show success message if needed
    console.log("List added successfully!")
  }

  return {
    title,
    description,
    category,
    setTitle,
    setDescription,
    setCategory,
    handleAddList,
  }
}

export default useCreateList
