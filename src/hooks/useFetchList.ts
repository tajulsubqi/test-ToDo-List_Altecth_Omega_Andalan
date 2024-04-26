import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

const useFetchList = () => {
  const [existingLists, setExistingLists] = useState<any[]>([])

  const loadListsFromStorage = async () => {
    try {
      const savedLists = await AsyncStorage.getItem("lists")
      if (savedLists) {
        setExistingLists(JSON.parse(savedLists))
      }
    } catch (error) {
      console.error("Error loading lists from AsyncStorage:", error)
    }
  }

  useEffect(() => {
    loadListsFromStorage()
  }, [])

  return {
    existingLists,
    setExistingLists,
  }
}

export default useFetchList
