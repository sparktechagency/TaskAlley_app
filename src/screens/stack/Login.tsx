import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import HeaderDesign from '../../components/shered/HeaderDesign'
import TextSecondary from '../../components/shered/TextSecondary'
import LoginFields from '../../formFields/LoginFields'
import SafeAreaProvider from '../../providers/SafeAreaProvider'
import { FieldsType } from '../../types/Types'
import { RenderField } from '../../utils/RenderField'

const Login = () => {
  const { fields, setFields } = LoginFields()
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
          {
            fields?.map((field: FieldsType) => RenderField(field, setFields))
          }
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({})