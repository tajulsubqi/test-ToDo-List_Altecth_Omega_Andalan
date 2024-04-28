import { Button, FlatList, Pressable, Text, View } from "react-native"
import tw from "twrnc"
import { Center } from "@gluestack-ui/themed"
import { Feather } from "@expo/vector-icons"
import ModalDelete from "../components/ui/DeleteModal"
import CheckBox from "../components/ui/CheckBox"
import { useAppDispatch, useAppSelector } from "../libs/Store"
import { useEffect, useRef, useState } from "react"
import { deleteList, getLists } from "../features/todos/todosSlice"
import useCheckList from "../hooks/useCheckList"
import Toast from "./popup/Toast"

const ListContent = ({ searchInput }: { searchInput: string }) => {
  const dispatch = useAppDispatch()
  const lists = useAppSelector((state) => state.app.todos)
  useEffect(() => {
    dispatch(getLists())
  }, [])

  const toastRef = useRef<any>(null)

  const { selectedItems, handleCheckboxChange } = useCheckList()
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null)

  const filteredLists = lists.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const handleDeleteList = async (title: string) => {
    await dispatch(deleteList(title))
    setShowModal(false)
    toastRef.current?.show({
      type: "success",
      text: "Successfully deleted list!",
      duration: 2000,
    })
  }

  return (
    <View style={tw`mb-[420px]`}>
      <View style={tw`w-full absolute z-30 -top-48`}>
        <Toast ref={toastRef} />
      </View>
      <FlatList
        data={filteredLists}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={true}
        style={tw`w-full h-full`}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={tw`mt-3 bg-[#B5C0D0] px-4 mx-4 py-3 rounded-lg`}>
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text
                  style={[
                    tw`font-bold text-[#4A55A2] text-[16px]`,
                    !!selectedItems[item.title] && {
                      textDecorationLine: "line-through",
                    },
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
                    !!selectedItems[item.title] && {
                      textDecorationLine: "line-through",
                    },
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
          )
        }}
      />
    </View>
  )
}

export default ListContent
