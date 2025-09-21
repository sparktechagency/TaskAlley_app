import { PortalProvider } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import GlobalContextProvider from "../providers/GlobalContextProvider";
import DrawerLayout from "./DrawerLayout";
const Root = () => {
  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <KeyboardProvider>
          <NavigationContainer>
            <GlobalContextProvider>
              <StatusBar
                barStyle={"dark-content"}
                backgroundColor={`#FFFFFF`}
              />
              <DrawerLayout />
            </GlobalContextProvider>
          </NavigationContainer>
        </KeyboardProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

export default Root;
