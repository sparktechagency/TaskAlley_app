import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ForgetPassword from '../screens/stack/ForgetPassword';
import Login from '../screens/stack/Login';
import Verify from '../screens/stack/Verify';
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
      route: "Forget",
      label: "Forget",
      component: ForgetPassword,
    },
    {
      route: "Verify",
      label: "Verify",
      component: Verify,
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
