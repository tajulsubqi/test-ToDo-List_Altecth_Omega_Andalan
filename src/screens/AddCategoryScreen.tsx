import React, { useState, useEffect } from "react"
import { Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/Input"
import Button from "../components/Button"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AddCategoryScreen = () => {
  const [category, setCategory] = useState("")
  const [categoriesData, setCategoriesData] = useState([])

  useEffect(() => {
    // Memuat data kategori saat komponen pertama kali dirender
    loadCategories()
  }, []) // Efek ini hanya dijalankan sekali saat komponen pertama kali dirender

  // Fungsi untuk memuat data kategori dari AsyncStorage
  const loadCategories = async () => {
    try {
      const savedCategories = await AsyncStorage.getItem("categories")
      if (savedCategories) {
        setCategoriesData(JSON.parse(savedCategories))
      }
    } catch (error) {
      console.error("Error loading categories:", error)
    }
  }

  // Fungsi untuk menyimpan data kategori ke AsyncStorage
  const saveCategory = async (newCategory) => {
    try {
      const updatedCategories = [...categoriesData, newCategory]
      setCategoriesData(updatedCategories)
      await AsyncStorage.setItem("categories", JSON.stringify(updatedCategories))
    } catch (error) {
      console.error("Error saving category:", error)
    }
  }

  const handleAddCategory = () => {
    if (category.trim() !== "") {
      saveCategory(category)
      setCategory("")
    }
  }

  return (
    <Container>
      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold`}>Add Category</Text>
        <Ionicons
          name="chevron-back-sharp"
          size={24}
          color="black"
          style={tw`absolute`}
        />
      </View>

      <View style={tw`w-full flex gap-4 my-5`}>
        <Input
          onChange={(text) => setCategory(text)}
          value={category}
          placeholder="Category name"
        />
        <Button label="Add List" onPress={handleAddCategory} />
      </View>

      <View style={tw`mt-10 `}>
        <Text style={tw`text-xl font-bold`}>List Category</Text>

        <View style={tw`mt-3 flex flex-row gap-2 flex-wrap py-3 rounded-lg`}>
          {categoriesData.map((data, index) => (
            <Text
              key={index}
              style={tw`bg-slate-700 px-4 font-semibold text-white py-[7px] rounded-lg`}
            >
              {data}
            </Text>
          ))}
        </View>
      </View>
    </Container>
  )
}

export default AddCategoryScreen
