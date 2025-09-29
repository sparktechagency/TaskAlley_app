import {
  CommonActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { ReactNode, useEffect } from "react";
import { Dimensions, View, ViewStyle } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../components/shered/BackButton";
import { useGlobalContext } from "./GlobalContextProvider";
const withoutLog = [
  "login",
  "signup",
  "forget",
  "verify",
  "resetpassword",
  "choosesignup",
  "customersignup",
  "servicesignup",
  "trustedservices",
  "securepayments",
  "realtimebooking",
];

const SafeAreaProviderNoScroll = ({
  children,
  backButtonText,
  zeroPadding = false,
  style
}: {
  children: ReactNode;
  backButtonText?: string;
  zeroPadding?: boolean;
  style?: ViewStyle
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();
  const { height } = Dimensions.get("window");
  const { role } = useGlobalContext();
  useEffect(() => {
    if (!role) {
      const currentRoute = route.name.toLowerCase();
      if (!withoutLog.includes(currentRoute)) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        );
      }
    }
  }, [role, route.name]);
  return (
    <SafeAreaView
      style={{
        height: height - (top + bottom),
        position: "relative",
        paddingHorizontal: zeroPadding ? 0 : 20,
      }}
    >
      {backButtonText && <BackButton text={backButtonText} />}
      <View
        style={{
          marginTop: backButtonText ? style?.justifyContent == "center" ? 0 : 45 : 0
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaProviderNoScroll;
