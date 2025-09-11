import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from '../screens/stack/Login';
import TabLayout from "./TabLayout";
const Stack = createNativeStackNavigator();

const StackLayout = () => {
  const stacks = [
    {
      route: "Login",
      label: "Login",
      component: Login,
    },
    {
      route: "TabLayout",
      label: "TabLayout",
      component: TabLayout,
    },
  ];

  return (
    <Stack.Navigator
      initialRouteName="TabLayout"
      screenOptions={{ headerShown: false }}
    >
      {
        stacks?.map((item: any) => <Stack.Screen name={item?.route} component={item?.component} options={{
          headerShown: false
        }} />)
      }
    </Stack.Navigator>
  );
};

export default StackLayout;
