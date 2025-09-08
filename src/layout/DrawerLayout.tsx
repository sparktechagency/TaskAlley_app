import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Privacy from '../screens/drawer/Privacy';
const Drawer = createDrawerNavigator();
const DrawerLayout = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Privacy} />
    </Drawer.Navigator>
  )
}

export default DrawerLayout
