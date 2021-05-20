import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./Components/MainScreen";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // 헤더 숨기기
        }}
      >
        <Stack.Screen name="Instagram" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
