import { useEffect } from "react"
import { View } from "react-native"
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed"
import { ChevronDownIcon } from "@gluestack-ui/themed"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../libs/Store"
import { fetchCategories } from "../../features/todos/todosSlice"

interface Props {
  value?: string | undefined
  onChange?: (value: string) => void
  isFocused?: boolean
}

const SelectCategory = ({ value, onChange, isFocused }: Props) => {
  const dispatch = useAppDispatch()
  const categoriesData = useSelector((state: RootState) => state.app.categories)
  console.log("select add list", categoriesData)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [isFocused])

  return (
    <View>
      <Select bgColor="white" value={value} onValueChange={onChange}>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select a category" fontSize={15} />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            {categoriesData.map((category) => (
              <SelectItem value={category} key={category} label={category} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  )
}

export default SelectCategory
