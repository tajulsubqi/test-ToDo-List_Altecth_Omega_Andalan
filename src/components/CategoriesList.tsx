import React, { useRef } from "react"
import { Pressable, Text } from "react-native"
import tw from "twrnc"
import { View } from "react-native"
import { useAppDispatch } from "../libs/Store"
import { deletedCategory } from "../features/todos/todosSlice"
import { Feather } from "@expo/vector-icons"
import Toast from "./popup/Toast"

interface Props {
  categoriesData: string[]
}

const CategoriesList = ({ categoriesData }: Props) => {
  const dispatch = useAppDispatch()

  const toastRef = useRef<any>()

  const handleDeleteCategory = (deleteCategory: string) => {
    dispatch(deletedCategory(deleteCategory))
    toastRef.current.show({
      type: "success",
      text: "Successfully deleted category!",
      duration: 2000,
    })
  }

  return (
    <View style={tw`mt-3 flex flex-row gap-2 flex-wrap py-3 rounded-lg`}>
      <View style={tw`w-full py-3 absolute z-200 -top-70`}>
        <Toast ref={toastRef} />
      </View>
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
