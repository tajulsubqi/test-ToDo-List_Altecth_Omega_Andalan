import { Pressable, Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/ui/Input"
import TextArea from "../components/ui/TextArea"
import Button from "../components/ui/Button"
import { Ionicons } from "@expo/vector-icons"
import SelectCategory from "../components/ui/SelectCategory"
import { createList } from "../features/todos/todosSlice"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useAppDispatch } from "../libs/Store"
import { Todo } from "../interface"

const AddListScreen = () => {
  const navigation = useNavigation()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const dispatch = useAppDispatch()

  const handleAddList = () => {
    try {
      dispatch(createList({ title, description, category } as Todo))
      setTitle("")
      setDescription("")
      setCategory("")

      navigation.navigate("Home" as never)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold`}>Add List</Text>
        <Pressable style={tw`absolute`}>
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </Pressable>
      </View>

      <View style={tw`w-full flex gap-4 my-5`}>
        <Input placeholder="Title" value={title} onChange={(text) => setTitle(text)} />
        <SelectCategory
          onChange={(category) => setCategory(category)}
          isFocused={navigation.isFocused()}
        />
        <TextArea value={description} onChange={(text) => setDescription(text)} />
        <Button label="Add List" onPress={handleAddList} />
      </View>
    </Container>
  )
}

export default AddListScreen
