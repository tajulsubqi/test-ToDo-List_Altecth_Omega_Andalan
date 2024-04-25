import React from "react"
import { Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/Input"
import TextArea from "../components/TextArea"
import Button from "../components/Button"
import { Ionicons } from "@expo/vector-icons"
import SelectCategory from "../components/SelectCategory"

const AddCategoryScreen = () => {
  return (
    <Container>
      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold`}>Add List</Text>
        <Ionicons
          name="chevron-back-sharp"
          size={24}
          color="black"
          style={tw`absolute`}
        />
      </View>

      <View style={tw`w-full flex gap-4 my-5`}>
        <Input placeholder="List name" />

        <SelectCategory />

        <TextArea />

        <Button label="Add List" />
      </View>
    </Container>
  )
}

export default AddCategoryScreen
