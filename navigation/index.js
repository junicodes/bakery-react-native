// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import RecipeScreen from "../screens/RecipeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import AddNewScreen from "../screens/AddNewScreen";
import EditScreen from "../screens/EditScreen";
import WeightScreen from "../screens/WeightScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      <Stack.Screen name="AddNew" component={AddNewScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="Weight" component={WeightScreen} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
