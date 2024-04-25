import { ScrollView, StatusBar, View } from "react-native"
import tw from "twrnc"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={"#fff"} />
      <View style={tw`w-full px-4 py-4`}>
        <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
      </View>
    </ScrollView>
  )
}

export default Container
