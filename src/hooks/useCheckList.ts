import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"

const useCheckList = () => {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: string | boolean }>(
    {},
  )

  useEffect(() => {
    // Load saved checked items from AsyncStorage on component mount
    const loadCheckedItems = async () => {
      const savedCheckedItems = await AsyncStorage.getItem("checkedItems")
      if (savedCheckedItems !== null) {
        setSelectedItems(JSON.parse(savedCheckedItems))
      }
    }

    loadCheckedItems()
  }, [])

  const handleCheckboxChange = async (title: string) => {
    const newCheckedItems = { ...selectedItems, [title]: !selectedItems[title] }
    setSelectedItems(newCheckedItems)
    await AsyncStorage.setItem("checkedItems", JSON.stringify(newCheckedItems))
  }

  return { selectedItems, handleCheckboxChange }
}

export default useCheckList
