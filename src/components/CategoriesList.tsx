import React from "react"
import { Pressable, Text } from "react-native"
import { View } from "react-native"
import tw from "twrnc"
import { useAppDispatch } from "../libs/Store"
import { deletedCategory } from "../features/todos/todosSlice"
import { Feather } from "@expo/vector-icons"

interface Props {
  categoriesData: string[]
}

const CategoriesList = ({ categoriesData }: Props) => {
  const dispatch = useAppDispatch()

  const handleDeleteCategory = (deleteCategory: string) => {
    // Panggil action creator deletedCategory dengan nama kategori yang akan dihapus
    dispatch(deletedCategory(deleteCategory))
  }

  return (
    <View style={tw`mt-3 flex flex-row gap-2 flex-wrap py-3 rounded-lg`}>
      {categoriesData.map((data, index) => (
        <View key={index} style={tw`relative`}>
          <Text
            style={tw`bg-[#4F709C] px-4 font-semibold text-white py-[7px] rounded-lg`}
          >
            {data}
          </Text>
          <Pressable
            onPress={() => handleDeleteCategory(data)}
            style={tw`absolute -top-2 -right-2  bg-red-500  rounded-full`}
          >
            <Feather name="x-circle" color={"white"} size={20} style={tw`  `} />
          </Pressable>
        </View>
      ))}
    </View>
  )
}

export default CategoriesList
