import {
  CommonActions,
  useRoute
} from "@react-navigation/native";
import React, { ReactNode, useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/shered/BackButton";
import { Navigation } from '../utils/Navigate';
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
const SafeAreaProvider = ({
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
  const navigation = Navigation();
  const route = useRoute();
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
        ...style,
        position: "relative",
        paddingHorizontal: zeroPadding ? 0 : 20,
      }}
    >
      {backButtonText && <BackButton text={backButtonText} />}
      <View
      >

        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SafeAreaProvider;

const styles = StyleSheet.create({});
