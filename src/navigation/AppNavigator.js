import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "aHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
