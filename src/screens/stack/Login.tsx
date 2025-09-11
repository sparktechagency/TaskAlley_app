import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SafeAreaProvider from '../../providers/SafeAreaProvider'

const Login = () => {
  return (
    <SafeAreaProvider
      backButtonText='test'
    >
      <ScrollView
        style={{
        }}
      >
        <View>
          <Text>
            Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({})