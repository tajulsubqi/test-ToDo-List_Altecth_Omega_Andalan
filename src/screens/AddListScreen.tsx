import { Pressable, Text, View } from "react-native"
import Container from "../layout"
import tw from "twrnc"
import Input from "../components/ui/Input"
import TextArea from "../components/ui/TextArea"
import Button from "../components/ui/Button"
import { Ionicons } from "@expo/vector-icons"
import SelectCategory from "../components/ui/SelectCategory"
import useCreateList from "../hooks/useCreateList"

const AddListScreen = () => {
  const { title, description, setTitle, setDescription, setCategory, handleAddList } =
    useCreateList()

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
        <SelectCategory onChange={(category) => setCategory(category)} />
        <TextArea value={description} onChange={(text) => setDescription(text)} />
        <Button label="Add List" onPress={handleAddList} />
      </View>
    </Container>
  )
}

export default AddListScreen
