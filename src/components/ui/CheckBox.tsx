import React, { useState } from "react"
import { Pressable, Text, StyleSheet } from "react-native"

interface Props {
  onChange?: (isChecked: boolean) => void
  isChecked?: boolean
}

const CheckBox = ({ onChange, isChecked }: Props) => {
  const [checked, setChecked] = useState(isChecked)

  const toggleChecked = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange && onChange(newChecked)
  }

  return (
    <Pressable
      style={[styles.checkbox, checked && styles.checked]}
      onPress={toggleChecked}
    >
      {checked && <Text style={styles.checkMark}>✓</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    marginEnd: 10,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "green",
    borderColor: "green",
  },
  checkMark: {
    color: "white",
    fontWeight: "bold",
  },
})

export default CheckBox
