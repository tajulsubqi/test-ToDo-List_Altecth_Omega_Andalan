import { NativeWindStyleSheet } from "nativewind"
import Navigation from "./src/routes/Navigation"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Provider } from "react-redux"
import { store } from "./src/libs/Store"

NativeWindStyleSheet.setOutput({
  default: "native",
})
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </GluestackUIProvider>
  )
}
