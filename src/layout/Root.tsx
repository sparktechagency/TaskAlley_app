import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GlobalContextProvider from '../providers/GlobalContextProvider';
import DrawerLayout from "./DrawerLayout";

const Root = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <GlobalContextProvider>
          <StatusBar barStyle={"dark-content"} backgroundColor={`#FFFFFF`} />
          <DrawerLayout />
        </GlobalContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Root;
