import React from "react"
import { Button, View } from "react-native"
import tw from "twrnc"

interface Props {
  label: string
  bgColor?: string
  onPress?: () => void
}

const CustomButton = ({ label, bgColor, onPress }: Props) => {
  return (
    <View style={tw`w-full p-1 bg-[#535C91] rounded-lg shadow-sm`}>
      <Button onPress={onPress} title={label} color={bgColor} />
    </View>
  )
}

export default CustomButton
