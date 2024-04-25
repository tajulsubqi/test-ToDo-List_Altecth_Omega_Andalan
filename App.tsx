import { NativeWindStyleSheet } from "nativewind"
import Navigation from "./src/routes/Navigation"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

NativeWindStyleSheet.setOutput({
  default: "native",
})
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Navigation />
    </GluestackUIProvider>
  )
}
