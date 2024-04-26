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

  const dispatch = useDispatch()

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
    </Container>
  )
}

export default AddCategoryScreen
