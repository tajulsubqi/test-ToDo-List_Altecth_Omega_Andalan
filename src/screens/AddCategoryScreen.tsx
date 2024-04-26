import React, { useState } from "react"
import { Pressable, Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { Ionicons } from "@expo/vector-icons"
import { useDispatch } from "react-redux"
import { addCategory } from "../features/todos/todosSlice"
import CategoriesList from "../components/CategoriesList"
import useFetchCategory from "../hooks/useFetchCategory"

const AddCategoryScreen = ({ navigation }: { navigation: any }) => {
  const { categoriesData } = useFetchCategory()
  const [category, setCategory] = useState("")
  const dispatch = useDispatch()

  const goToHome = () => {
    navigation.navigate("Home")
  }

  const handleAddCategory = () => {
    if (category.trim() !== "") {
      dispatch(addCategory(category))
      setCategory("")
    }
  }

  return (
    <Container>
      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold`}>Add Category</Text>

        <Pressable onPress={goToHome} style={tw`absolute`}>
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </Pressable>
      </View>

      <View style={tw`w-full flex gap-4 my-5`}>
        <Input
          onChange={(e) => setCategory(e)}
          value={category}
          placeholder="Category name"
        />
        <Button label="Add Category" onPress={handleAddCategory} />
      </View>

      <View style={tw`mt-10 `}>
        <Text style={tw`text-xl font-bold`}>List Category</Text>

        <CategoriesList categoriesData={categoriesData} />
      </View>
    </Container>
  )
}

export default AddCategoryScreen
