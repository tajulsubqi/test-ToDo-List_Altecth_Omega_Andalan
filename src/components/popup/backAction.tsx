import { useEffect } from "react"
import { Alert, BackHandler } from "react-native"

const backAction = () => {
  Alert.alert("Hold on!", " Are you sure you want to exit?", [
    {
      text: "Cancel",
      onPress: () => null,
      style: "cancel",
    },
    { text: "YES", onPress: () => BackHandler.exitApp() },
  ])
  return true
}

const BackButtonHandler = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }, [])

  return null
}

export default BackButtonHandler
