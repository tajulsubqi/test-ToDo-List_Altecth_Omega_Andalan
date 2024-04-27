import React from "react"
import { Text } from "react-native"
import { View } from "react-native"
import tw from "twrnc"

interface Props {
  categoriesData: string[]
}

const CategoriesList = ({ categoriesData }: Props) => {
  return (
    <View style={tw`mt-3 flex flex-row gap-2 flex-wrap py-3 rounded-lg`}>
      {categoriesData.map((data, index) => (
        <Text
          key={index}
          style={tw`bg-slate-700 px-4 font-semibold text-white py-[7px] rounded-lg`}
        >
          {data}
        </Text>
      ))}
    </View>
  )
}

export default CategoriesList
