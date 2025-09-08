import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'

const Root = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={`#FFFFFF`} />
    </NavigationContainer>
  )
}

export default Root
