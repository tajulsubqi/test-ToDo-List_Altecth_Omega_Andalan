import { Image, Text, View } from "react-native"
import tw from "twrnc"
import Input from "../components/ui/Input"
import { useAppSelector } from "../libs/Store"
import { StatusBar } from "react-native"
import BackButtonHandler from "../components/popup/backAction"
import ListContent from "../components/ListContent"
import { useRef, useState } from "react"
import Toast from "../components/popup/Toast"

const HomeScreen = () => {
  const lists = useAppSelector((state) => state.app.todos)
  const [searchInput, setSearchInput] = useState<string>("")
  console.log({ lists })
  const toastRef = useRef<any>()

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
      <ListContent searchInput={searchInput} toastRef={toastRef} />
      <Toast ref={toastRef} />
    </View>
  )
}

export default HomeScreen
