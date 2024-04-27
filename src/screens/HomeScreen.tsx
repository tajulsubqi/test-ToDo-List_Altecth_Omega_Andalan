import { useRef, useState } from "react"
import { Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native"
import tw from "twrnc"
import Input from "../components/ui/Input"
import {
  Center,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from "@gluestack-ui/themed"
import { Feather } from "@expo/vector-icons"
import ModalDelete from "../components/ui/DeleteModal"
import AsyncStorage from "@react-native-async-storage/async-storage"
import useFetchList from "../hooks/useFetchList"

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false)
  const ref = useRef(null)
  const { existingLists, setExistingLists } = useFetchList()

  // const dispatch = useDispatch()

  const handleDeleteList = async (title: string) => {
    const updatedLists = existingLists.filter((item) => item.title !== title)
    await AsyncStorage.setItem("lists", JSON.stringify(updatedLists))
    setExistingLists(updatedLists)
    setShowModal(false)
  }

  // const handleDeleteList = async (title: string) => {
  //   dispatch(removeList({ title }))
  //   setShowModal(false)
  // }

  return (
    <ScrollView>
      <StatusBar backgroundColor={"#0369a1"} />
      <View style={tw`w-full bg-sky-700 shadow-md rounded-b-[40px] mb-5 px-4 py-4`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <View>
            <Text style={tw`text-2xl text-white font-bold`}>Hi, Tajul</Text>
            <Text style={tw`text-sm text-sky-100`}>5 list</Text>
          </View>

          <View style={tw`w-12 h-12 p-[6px] bg-sky-400 rounded-full`}>
            <Image source={require("../../public/img.png")} style={tw`w-full h-full`} />
          </View>
        </View>

        <View style={tw`w-full mt-5 mb-5`}>
          <Input icon placeholder="Search List ......" />
          {/* <Dropdown /> */}
        </View>
      </View>

      {/* list */}
      {existingLists.map((item: any, index: number) => (
        <View key={index} style={tw`mt-3 bg-sky-200 px-4 mx-4 py-3 rounded-lg`}>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-bold text-[16px]`}>{item.title}</Text>
            <Text style={tw`font-bold text-white bg-sky-500 px-3 py-1 rounded`}>
              {item.category}
            </Text>
          </View>
          <View style={tw`flex flex-row mt-1 items-center justify-between`}>
            <Text style={tw`w-3/4 text-gray-500 text-[12px] text-justify`}>
              {item.description}
            </Text>

            <View style={tw`flex flex-row items-center`}>
              <Checkbox onChange={() => console.log("changed")} value="">
                <CheckboxIndicator mr="$2" bgColor="white" $active-bgColor="green">
                  <CheckboxIcon color="green" as={CheckIcon} />
                </CheckboxIndicator>
              </Checkbox>

              <Center>
                <Pressable
                  onPress={() => setShowModal(true)}
                  ref={ref}
                  style={tw` w-6 h-6 flex items-center justify-center p-2 bg-red-500 rounded-full`}
                >
                  <Feather name="x-circle" size={22} color="white" />
                </Pressable>

                <ModalDelete
                  onPress={() => handleDeleteList(item.title)}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  ref={ref}
                />
              </Center>
            </View>
          </View>
        </View>
      ))}
      {/* list */}
    </ScrollView>
  )
}

export default HomeScreen
