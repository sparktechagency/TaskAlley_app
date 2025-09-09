import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Home = () => {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <View style={{
      backgroundColor: "red",
      marginTop: top,
      marginBottom: bottom
    }}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})