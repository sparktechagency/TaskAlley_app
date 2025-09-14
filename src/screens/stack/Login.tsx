import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import HeaderDesign from '../../components/shered/HeaderDesign'
import TextSecondary from '../../components/shered/TextSecondary'
import InputCheckbox from '../../components/ui/inputs/InputCheckbox'
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
          <HeaderDesign
          />
          <TextSecondary
            text='Log in with your credentials to access your account and manage everything from one place.'
          />
          <InputCheckbox />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({})