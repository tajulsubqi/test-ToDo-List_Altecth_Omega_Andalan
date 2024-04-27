import Navigation from "./src/navigation/Navigation"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Provider } from "react-redux"
import { store } from "./src/libs/Store"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </GluestackUIProvider>
  )
}
