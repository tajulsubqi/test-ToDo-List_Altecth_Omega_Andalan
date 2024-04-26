import React, { useState, useEffect } from "react"
import { Pressable, Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/ui/Input"
import TextArea from "../components/ui/TextArea"
import Button from "../components/ui/Button"
import { Ionicons } from "@expo/vector-icons"
import SelectCategory from "../components/ui/SelectCategory"
import { useDispatch } from "react-redux"
import { addList } from "../features/todos/todosSlice"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AddCategoryScreen = ({ navigation }: { navigation: any }) => {
  const [listTitle, setListTitle] = useState("")
  const [listDescription, setListDescription] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [existingLists, setExistingLists] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    loadListsFromStorage()
  }, [])

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

  const goToCategory = () => {
    navigation.navigate("AddCategory")
  }

  const handleAddList = () => {
    if (listTitle.trim() !== "" && selectedCategory.trim() !== "") {
      const newList = {
        title: listTitle,
        category: selectedCategory,
        description: listDescription,
      }

      AsyncStorage.getItem("lists")
        .then((savedLists) => {
          let updatedLists = []
          if (savedLists) {
            updatedLists = JSON.parse(savedLists)
          }
          updatedLists.push(newList)

          return AsyncStorage.setItem("lists", JSON.stringify(updatedLists))
        })
        .then(() => {
          dispatch(addList(newList))

          setListTitle("")
          setListDescription("")
          setSelectedCategory("")

          // Setelah menambahkan, perbarui daftar yang ditampilkan
          setExistingLists((prevLists) => [...prevLists, newList])
        })
        .catch((error) => {
          console.error("Error saving list to AsyncStorage:", error)
        })
    }
  }

  return (
    <Container>
      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold`}>Add List</Text>
        <Pressable onPress={goToCategory} style={tw`absolute`}>
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </Pressable>
      </View>

      <View style={tw`w-full flex gap-4 my-5`}>
        <Input placeholder="title" value={listTitle} onChange={setListTitle} />
        <SelectCategory value={selectedCategory} onChange={setSelectedCategory} />
        <TextArea value={listDescription} onChange={setListDescription} />
        <Button label="Add List" onPress={handleAddList} />
      </View>

      {/* Tampilkan data yang sudah ada */}
      <View style={tw`mt-5`}>
        <Text style={tw`text-xl font-bold mb-3`}>Existing Lists:</Text>
        {existingLists.map((list, index) => (
          <View key={index} style={tw`border-b-2 py-2`}>
            <Text style={tw`text-lg`}>{list.title}</Text>
            <Text style={tw`text-sm text-gray-500`}>{list.description}</Text>
            <Text style={tw`text-sm text-gray-500`}>{list.category}</Text>
          </View>
        ))}
      </View>
    </Container>
  )
}

export default AddCategoryScreen
