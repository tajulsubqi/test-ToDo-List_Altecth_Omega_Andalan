import { Image, Pressable, Text, View } from "react-native"
import tw from "twrnc"
import Input from "../components/ui/Input"
import { useAppDispatch, useAppSelector } from "../libs/Store"
import { StatusBar } from "react-native"
import BackButtonHandler from "../components/popup/backAction"
import ListContent from "../components/ListContent"
import { useEffect, useState } from "react"
import LottieView from "lottie-react-native"
import { useNavigation } from "@react-navigation/native"
import Button from "../components/ui/Button"
import { getLists } from "../features/todos/todosSlice"

const HomeScreen = () => {
  const lists = useAppSelector((state) => state.app.todos)
  const dispatch = useAppDispatch()
  const [searchInput, setSearchInput] = useState<string>("")
  console.log({ lists })

  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getLists())
  }, [])

  BackButtonHandler()

  return (
    <View style={tw`bg-[#EEEEEE]`}>
      <StatusBar backgroundColor={"#4F709C"} />
      <View style={tw`w-full bg-[#4F709C] shadow-md rounded-b-[40px] mb-5 px-4 py-4`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <View>
            <Text style={tw`text-2xl text-white font-bold`}>ToDo List</Text>
            <Text style={tw`text-sm text-sky-100`}>{lists.length} list</Text>
          </View>

          <View style={tw`w-12 h-12 p-[6px] bg-sky-400 rounded-full`}>
            <Image source={require("../../public/img.png")} style={tw`w-full h-full`} />
          </View>
        </View>

        <View style={tw`w-full mt-5 mb-5`}>
          <Input icon placeholder="Search List ......" onChange={setSearchInput} />
        </View>
      </View>

      {/* list */}

      {lists.length > 0 ? (
        <ListContent searchInput={searchInput} />
      ) : (
        <View
          style={tw`w-full absolute z-10 top-50 flex gap-5 items-center justify-center`}
        >
          <View style={tw`w-[450px] h-[350px]`}>
            <LottieView
              style={tw`flex-1`}
              source={require("../../assets/animations/noData.json")}
              autoPlay
              loop
            />
          </View>

          <View style={tw`w-60`}>
            <Button
              onPress={() => navigation.navigate("Addlist" as never)}
              label="Add list"
              bgColor="#535C91"
            />
          </View>
        </View>
      )}
    </View>
  )
}

export default HomeScreen
