import { StyleSheet, TextInput, View } from "react-native"
import React from "react"
import tw from "twrnc"

interface Props {
  value?: string
  onChange?: (text: string) => void
}

const TextArea = ({ value, onChange }: Props) => {
  return (
    <View>
      <TextInput
        placeholder="Description"
        multiline
        numberOfLines={4} // Anda dapat mengatur berapa baris yang ingin ditampilkan
        value={value}
        onChangeText={onChange}
        style={tw`bg-white text-[15px] text-gray-600 rounded-lg shadow-sm px-4 py-3 `}
      />
    </View>
  )
}

export default TextArea
