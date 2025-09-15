import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { OtpInput } from 'react-native-otp-entry'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderDesign from '../../components/shered/HeaderDesign'
import TextSecondary from '../../components/shered/TextSecondary'
import ButtonBG from '../../components/ui/buttons/ButtonBG'
import SafeAreaProvider from '../../providers/SafeAreaProvider'

const Verify = () => {
  const { height } = Dimensions.get("window");
  const { top, bottom } = useSafeAreaInsets()
  return (
    <SafeAreaProvider
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
        }}
      >
        <View style={{
          flex: 1,
          gap: 6,
          justifyContent: "center",
          minHeight: height - top - bottom
        }}>
          <HeaderDesign
            text='6-digit code'
          />
          <TextSecondary
            text="Please enter the code we've sent to your Phone Number"
          />
          <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)} />
          <ButtonBG
            style={{
              marginTop: 10
            }}
            text='Confirm'
            handler={() => {
              // handleSignIn(fields, setFields)
              // navigate.navigate("Verify")

            }}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Verify

const styles = StyleSheet.create({})