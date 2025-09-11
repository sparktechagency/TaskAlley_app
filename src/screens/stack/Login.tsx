import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import HeaderDesign from '../../components/authentication/HeaderDesign'
import SafeAreaProvider from '../../providers/SafeAreaProvider'

const Login = () => {
  return (
    <SafeAreaProvider
    >
      <ScrollView
        style={{
        }}
      >
        <View>
          <HeaderDesign />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({})