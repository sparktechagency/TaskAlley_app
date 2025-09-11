import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Tabbar from "../components/tabbar/Tabbar";
import Chat from "../screens/tabs/Chat";
import Home from "../screens/tabs/Home";
import PostTask from "../screens/tabs/PostTask";
import Profile from "../screens/tabs/Profile";
import Tasks from "../screens/tabs/Tasks";
const Tab = createBottomTabNavigator();
const TabLayout = () => {
  const tabs = [
    {
      route: "Home",
      label: "Home",
      component: Home,
    },
    {
      route: "Task",
      label: "My Tasks",
      component: Tasks,
    },
    {
      route: "PostTask",
      label: "Post Task",
      component: PostTask,
    },
    {
      route: "Chat",
      label: "Chat",
      component: Chat,
    },
    {
      route: "Profile",
      label: "Profile",
      component: Profile,
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <Tabbar {...props} />}
    >
      {tabs?.map((item: any) => (
        <Tab.Screen
          key={item?.route}
          name={item?.route}
          options={{
            tabBarLabel: item?.label,
            headerShown: false
          }}
          component={item?.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
