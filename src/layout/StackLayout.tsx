import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChooseSignUp from '../screens/stack/auth/ChooseSignUp';
import CustomerSignUp from '../screens/stack/auth/CustomerSignUp';
import ForgetPassword from '../screens/stack/auth/ForgetPassword';
import Login from '../screens/stack/auth/Login';
import ResetPassword from '../screens/stack/auth/ResetPassword';
import ServiceSignUp from '../screens/stack/auth/ServiceSignUp';
import Verify from '../screens/stack/auth/Verify';
import Category from '../screens/stack/Category';
import RealTimeBooking from '../screens/stack/onboarding/RealTimeBooking';
import SecurePayments from '../screens/stack/onboarding/SecurePayments';
import TrustedServices from '../screens/stack/onboarding/TrustedServices';
import Search from '../screens/stack/Search';
import TabLayout from "./TabLayout";
const Stack = createNativeStackNavigator();

const StackLayout = () => {
  const screens = {
    Login: Login,
    Forget: ForgetPassword,
    Verify: Verify,
    ResetPassword: ResetPassword,
    ChooseSignUp: ChooseSignUp,
    CustomerSignUp: CustomerSignUp,
    ServiceSignUp: ServiceSignUp,
    RealTimeBooking: RealTimeBooking,
    SecurePayments: SecurePayments,
    TrustedServices: TrustedServices,
    Search: Search,
    TabLayout: TabLayout,
    Category: Category
  };

  const stacks = Object.keys(screens).map(key => ({
    route: key,
    label: key,
    component: screens[key as keyof typeof screens],
  }));

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
