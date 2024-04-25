import React from "react"
import { TextInput, View } from "react-native"
import tw from "twrnc"
import Icon from "react-native-vector-icons/Ionicons"

interface Props {
  placeholder: string
  icon?: boolean
  onChange?: (text: string) => void
  value?: string
}

const Input = ({ placeholder, icon, onChange, value }: Props) => {
  return (
    <View style={tw`relative`}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={tw`bg-white text-[15px] text-gray-600 px-4 py-3 rounded-lg shadow-sm`}
      />
      {icon && (
        <Icon name="search" size={22} color="gray" style={tw`absolute right-3 top-3`} />
      )}
    </View>
  )
}

export default Input
