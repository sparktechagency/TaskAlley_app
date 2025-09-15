import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChooseSignUp from '../screens/stack/auth/ChooseSignUp';
import CustomerSignUp from '../screens/stack/auth/CustomerSignUp';
import ForgetPassword from '../screens/stack/auth/ForgetPassword';
import Login from '../screens/stack/auth/Login';
import ResetPassword from '../screens/stack/auth/ResetPassword';
import ServiceSignUp from '../screens/stack/auth/ServiceSignUp';
import Verify from '../screens/stack/auth/Verify';
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
      route: "ResetPassword",
      label: "ResetPassword",
      component: ResetPassword,
    },
    {
      route: "ChooseSignUp",
      label: "ChooseSignUp",
      component: ChooseSignUp,
    },
    {
      route: "CustomerSignUp",
      label: "CustomerSignUp",
      component: CustomerSignUp,
    },
    {
      route: "ServiceSignUp",
      label: "ServiceSignUp",
      component: ServiceSignUp,
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
