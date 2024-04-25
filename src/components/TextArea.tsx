import { StyleSheet, TextInput, View } from "react-native"
import React from "react"
import tw from "twrnc"

interface Props {
  value?: string
  onChangeText?: (text: string) => void
}

const TextArea = ({ value, onChangeText }: Props) => {
  return (
    <View>
      <TextInput
        placeholder="Type here..."
        multiline
        numberOfLines={4} // Anda dapat mengatur berapa baris yang ingin ditampilkan
        value={value}
        onChangeText={onChangeText}
        style={tw`bg-white text-[15px] text-gray-600 rounded-lg shadow-sm px-4 py-3 `}
      />
    </View>
  )
}

export default TextArea
