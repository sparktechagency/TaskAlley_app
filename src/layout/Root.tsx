import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import DrawerLayout from './DrawerLayout'

const Root = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={`#FFFFFF`} />
      <DrawerLayout />
    </NavigationContainer>
  )
}

export default Root
