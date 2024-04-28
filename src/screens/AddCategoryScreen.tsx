import React, { useEffect, useRef, useState } from "react"
import { Pressable, Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { Ionicons } from "@expo/vector-icons"
import { createCategory, fetchCategories } from "../features/todos/todosSlice"
import { useAppDispatch, useAppSelector } from "../libs/Store"
import CategoriesList from "../components/CategoriesList"
import { useNavigation } from "@react-navigation/native"
import Toast from "../components/popup/Toast"

const AddCategoryScreen = () => {
  const dispatch = useAppDispatch()
  const categoriesData = useAppSelector((state) => state.app.categories)
  const [categoryName, setCategoryName] = useState<string>("")
  const navigation = useNavigation()

  const toastRef = useRef<any>()

  const handleAddCategory = () => {
    if (typeof categoryName !== "string" || categoryName.trim() === "") {
      toastRef.current?.show({
        type: "error",
        text: "Category name cannot be empty",
        duration: 2000,
      })
      return
    }

    dispatch(createCategory(categoryName))

    setCategoryName("")
    toastRef.current?.show({
      type: "success",
      text: "Successfully added category!",
      duration: 2000,
    })
  }

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <Container>
      <Toast ref={toastRef} />
      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold text-[#4F709C]`}>
          Add Category
        </Text>

        <Pressable onPress={() => navigation.goBack()} style={tw`absolute`}>
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </Pressable>
      </View>

      <View style={tw`w-full flex gap-4 my-5`}>
        <Input
          placeholder="Category name"
          value={categoryName}
          onChange={setCategoryName}
        />
        <Button label="Add Category" bgColor="#535C91" onPress={handleAddCategory} />
      </View>

      <View style={tw`mt-10 `}>
        <Text style={tw`text-xl font-bold`}>List Category</Text>

        <CategoriesList categoriesData={categoriesData} />
      </View>
    </Container>
  )
}
export default AddCategoryScreen
