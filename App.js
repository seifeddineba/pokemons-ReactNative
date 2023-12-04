import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CollectionProvider } from "./src/context/contextApi";
import LoginScreen from "./src/screens/LoginScreen";
import PokemonsScreen from "./src/screens/PokemonsScreen";
import CollectionScreen from "./src/screens/CollectionScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <CollectionProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Pokemons" component={PokemonsScreen} />
          <Stack.Screen name="Collection" component={CollectionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CollectionProvider>
  );
}
