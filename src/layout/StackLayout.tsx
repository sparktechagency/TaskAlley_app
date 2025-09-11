import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabLayout from "./TabLayout";
const Stack = createNativeStackNavigator();
const StackLayout = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabLayout"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TabLayout" component={TabLayout} />
    </Stack.Navigator>
  );
};

export default StackLayout;
