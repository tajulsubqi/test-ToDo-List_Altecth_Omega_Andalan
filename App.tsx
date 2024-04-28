import Navigation from "./src/navigation/Navigation"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Provider } from "react-redux"
import { store } from "./src/libs/Store"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
        {/* <SafeAreaView style={styles.container}> */}
        <Navigation />
        {/* </SafeAreaView> */}
        {/* </GestureHandlerRootView> */}
      </Provider>
    </GluestackUIProvider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },

//   // buttonText: { fontSize: 16, fontWeight: "600", color: "black" },
// })
