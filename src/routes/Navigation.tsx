import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../screens/HomeScreen"
import AddListScreen from "../screens/AddListScreen"
import AddCategoryScreen from "../screens/AddCategoryScreen"

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Addlist"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let IconComponent
            let iconSize = 30

            if (route.name === "Home") {
              iconName = focused ? "home" : "home"
              IconComponent = MaterialIcons
            } else if (route.name === "Addlist") {
              iconName = focused ? "post-add" : "post-add"
              IconComponent = MaterialIcons
            } else if (route.name === "AddCategory") {
              iconName = focused ? "format-list-bulleted-add" : "format-list-bulleted-add"
              IconComponent = MaterialIcons
            }

            // Return the Ionicons component with the appropriate icon name
            return <IconComponent name={iconName} size={iconSize} color={color} />
          },
          tabBarActiveTintColor: "skyblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, tabBarLabel: () => null }}
        />
        <Tab.Screen
          name="AddCategory"
          component={AddCategoryScreen}
          options={{ headerShown: false, tabBarLabel: () => null }}
        />
        <Tab.Screen
          name="Addlist"
          component={AddListScreen}
          options={{ headerShown: false, tabBarLabel: () => null }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
