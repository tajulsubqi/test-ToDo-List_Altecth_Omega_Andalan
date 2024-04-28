import { Pressable, Text, ToastAndroid, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/ui/Input"
import TextArea from "../components/ui/TextArea"
import Button from "../components/ui/Button"
import { Ionicons } from "@expo/vector-icons"
import SelectCategory from "../components/ui/SelectCategory"
import { createList } from "../features/todos/todosSlice"
import { useRef, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useAppDispatch } from "../libs/Store"
import { Todo } from "../interface"
import Toast from "../components/popup/Toast"

const AddListScreen = () => {
  const navigation = useNavigation()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const dispatch = useAppDispatch()
  const toastRef = useRef<any>()

  const handleAddList = () => {
    if (!title.trim() || !description.trim() || !category.trim()) {
      console.log("Please fill in all fields")
      toastRef.current?.show({
        type: "error",
        text: "Please fill in all fields",
        duration: 2000,
      })
      return
    }

    dispatch(createList({ title, description, category } as Todo))
    setTitle("")
    setDescription("")
    setCategory("")
    toastRef.current?.show({
      type: "success",
      text: "Successfully added list!",
      duration: 2000,
    })

    navigation.navigate("Home" as never)
  }

  return (
    <Container>
      <Toast ref={toastRef} />

      <View style={tw`relative`}>
        <Text style={tw`text-2xl text-center font-bold text-[#4F709C]`}>Add List</Text>
        <Pressable onPress={() => navigation.goBack()} style={tw`absolute`}>
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

        <Button label="Add List" bgColor="#535C91" onPress={handleAddList} />
      </View>
    </Container>
  )
}

export default AddListScreen
