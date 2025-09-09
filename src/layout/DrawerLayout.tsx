import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import StackLayout from './StackLayout';
const Drawer = createDrawerNavigator();
const DrawerLayout = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='StackLayout'
    >
      <Drawer.Screen name="StackLayout" component={StackLayout} />
    </Drawer.Navigator>
  )
}

export default DrawerLayout
