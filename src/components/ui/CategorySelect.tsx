import { View } from "react-native"
import RNPickerSelect from "react-native-picker-select"
import tw from "twrnc"
import useFetchCategory from "../../hooks/useFetchCategory"
import { onChange } from "@gluestack-style/react"

interface Props {
  value?: string
  onChange?: (value: string) => void
}

const CategorySelect = ({ value, onChange }: Props) => {
  const { categoriesData } = useFetchCategory()

  return (
    <View>
      <RNPickerSelect
        value={value}
        style={tw`bg-white text-[15px] text-gray-600 px-4 py-3 rounded-lg shadow-sm`}
        onValueChange={onChange}
        items={categoriesData.map((category) => ({
          label: category,
          value: category,
        }))}
      />
    </View>
  )
}

export default CategorySelect
