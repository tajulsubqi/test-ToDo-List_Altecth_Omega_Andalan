import { useRef, useState, useEffect } from "react"
import { FlatList, Image, Pressable, Text, View } from "react-native"
import tw from "twrnc"
import Input from "../components/ui/Input"
import { Center } from "@gluestack-ui/themed"
import { Feather } from "@expo/vector-icons"
import ModalDelete from "../components/ui/DeleteModal"
import CheckBox from "../components/ui/CheckBox"
import { deleteList, getLists } from "../features/todos/todosSlice"
import { useAppDispatch, useAppSelector } from "../libs/Store"
import useCheckList from "../hooks/useCheckList"
import { StatusBar } from "react-native"
import BackButtonHandler from "../components/popup/backAction"
import { ToastDeleteList } from "../components/popup/Toast"
import useSearchList from "../hooks/useSearchList"

const HomeScreen = () => {
  const lists = useAppSelector((state) => state.app.todos)
  const dispatch = useAppDispatch()

  const { selectedItems, handleCheckboxChange } = useCheckList()
  const { handleSearch, searchText, searchResults } = useSearchList()
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    dispatch(getLists())
  }, [])

  // console.log({ lists })

  const handleDeleteList = async (title: string) => {
    await dispatch(deleteList(title))
    setShowModal(false)
    ToastDeleteList()
  }
  BackButtonHandler()

  return (
    <View style={tw`bg-[#EEEEEE]`}>
      <StatusBar backgroundColor={"#4F709C"} />
      <View style={tw`w-full bg-[#4F709C] shadow-md rounded-b-[40px] mb-5 px-4 py-4`}>
        <View style={tw`flex flex-row items-center justify-between`}>
          <View>
            <Text style={tw`text-2xl text-white font-bold`}>Hi, Tajul</Text>
            <Text style={tw`text-sm text-sky-100`}>{lists.length} list</Text>
          </View>

          <View style={tw`w-12 h-12 p-[6px] bg-sky-400 rounded-full`}>
            <Image source={require("../../public/img.png")} style={tw`w-full h-full`} />
          </View>
        </View>

        <View style={tw`w-full mt-5 mb-5`}>
          <Input
            icon
            placeholder="Search List ......"
            onChange={handleSearch}
            value={searchText}
          />

          {/* <Dropdown /> */}
        </View>
      </View>

      {/* list */}
      <FlatList
        data={searchText ? searchResults : lists}
        renderItem={({ item, index }) => (
          <View key={index} style={tw`mt-3 bg-[#B5C0D0] px-4 mx-4 py-3 rounded-lg`}>
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text
                style={[
                  tw`font-bold text-[#4A55A2] text-[16px]`,
                  !!selectedItems[item.title] && { textDecorationLine: "line-through" },
                ]}
              >
                {item.title}
              </Text>
              <Text style={tw`font-bold text-white bg-[#4F709C] px-3 py-1 rounded-lg`}>
                {item.category}
              </Text>
            </View>
            <View style={tw`flex flex-row mt-1 items-center justify-between`}>
              <Text
                style={[
                  tw`w-3/4 text-gray-700 text-[13px] text-justify`,
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
                    ref={modalRef}
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
                  />
                </Center>
              </View>
            </View>
          </View>
        )}
      />
      {/* list */}
    </View>
  )
}

export default HomeScreen
