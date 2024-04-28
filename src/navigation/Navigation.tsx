import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../screens/HomeScreen"
import AddListScreen from "../screens/AddListScreen"
import AddCategoryScreen from "../screens/AddCategoryScreen"
import OnboardingScreen from "../screens/OnboardingScreen"
import { createStackNavigator } from "@react-navigation/stack"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#4F709C",
          borderRadius: 0,
          borderTopLeftRadius: 30,
          paddingHorizontal: 10,
          height: 60,
          borderTopRightRadius: 30,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName
          let IconComponent
          let iconSize = 35

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
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#A0BFE0",
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
      {/* <Tab.Screen
        name="Toast"
        component={CustomToastScreen}
        options={{ headerShown: false, tabBarLabel: () => null }}
      /> */}
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
