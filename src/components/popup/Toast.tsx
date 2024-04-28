import { ToastAndroid } from "react-native"

export const ToastListSuccess = () => {
  ToastAndroid.show("List successfully added!", ToastAndroid.SHORT)
}

export const ToastAddCategorySuccess = () => {
  ToastAndroid.show("Category successfully added!", ToastAndroid.SHORT)
}

export const ToastDeleteCategory = () => {
  ToastAndroid.show("Category successfully deleted!", ToastAndroid.SHORT)
}

export const ToastDeleteList = () => {
  ToastAndroid.show("List successfully deleted!", ToastAndroid.SHORT)
}
