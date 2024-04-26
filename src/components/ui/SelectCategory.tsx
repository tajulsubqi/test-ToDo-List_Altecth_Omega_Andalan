import React from "react"
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
import useFetchCategory from "../../hooks/useFetchCategory"
import { ChevronDownIcon } from "@gluestack-ui/themed"

interface Props {
  value?: string | undefined
  onChange?: (value: string) => void
}

const SelectCategory = ({ value, onChange }: Props) => {
  const { categoriesData } = useFetchCategory()

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
