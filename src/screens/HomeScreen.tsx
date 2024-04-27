import { useRef, useState, useEffect } from "react"
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native"
import tw from "twrnc"
import Input from "../components/ui/Input"
import { Center } from "@gluestack-ui/themed"
import { Feather } from "@expo/vector-icons"
import ModalDelete from "../components/ui/DeleteModal"
import CheckBox from "../components/ui/CheckBox"
import { deleteList, getLists } from "../features/todos/todosSlice"
import { useAppDispatch, useAppSelector } from "../libs/Store"
import useCheckList from "../hooks/useCheckList"

const HomeScreen = () => {
  const lists = useAppSelector((state) => state.app.todos)
  const { selectedItems, handleCheckboxChange } = useCheckList()
  const dispatch = useAppDispatch()
  const [showModal, setShowModal] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    dispatch(getLists())
  }, [])

  console.log({ lists })

  const handleDeleteList = async (title: string) => {
    await dispatch(deleteList(title))
    setShowModal(false)
  }

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
      <FlatList
        data={lists}
        renderItem={({ item, index }) => (
          <View key={index} style={tw`mt-3 bg-sky-200 px-4 mx-4 py-3 rounded-lg`}>
            {/* Render each list item here */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text
                style={[
                  tw`font-bold text-[16px]`,
                  !!selectedItems[item.title] && { textDecorationLine: "line-through" },
                ]}
              >
                {item.title}
              </Text>
              <Text style={tw`font-bold text-white bg-sky-500 px-3 py-1 rounded`}>
                {item.category}
              </Text>
            </View>
            <View style={tw`flex flex-row mt-1 items-center justify-between`}>
              <Text
                style={[
                  tw`w-3/4 text-gray-500 text-[12px] text-justify`,
                  !!selectedItems[item.title] && { textDecorationLine: "line-through" },
                ]}
              >
                {item.description}
              </Text>

              <View style={tw`flex flex-row items-center`}>
                <CheckBox
                  onChange={() => handleCheckboxChange(item.title)}
                  isChecked={!!selectedItems[item.title]}
                />

                <Center>
                  <Pressable
                    onPress={() => setShowModal(true)}
                    ref={ref}
                    style={tw`flex w-6 h-6 items-center justify-center bg-red-500 rounded-full`}
                  >
                    <Feather
                      name="x-circle"
                      size={24}
                      color="white"
                      style={tw`w-6 h-6`}
                    />
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
        )}
      />
      {/* list */}
    </ScrollView>
  )
}

export default HomeScreen
