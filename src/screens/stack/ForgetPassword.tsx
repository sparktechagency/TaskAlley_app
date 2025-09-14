import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderDesign from '../../components/shered/HeaderDesign'
import TextSecondary from '../../components/shered/TextSecondary'
import ButtonBG from '../../components/ui/buttons/ButtonBG'
import ForgetPasswordFields from '../../formFields/ForgetPasswordFields'
import { handleSignIn } from '../../handler/signIn'
import SafeAreaProvider from '../../providers/SafeAreaProvider'
import { FieldsType } from '../../types/Types'
import { RenderField } from '../../utils/RenderField'

const ForgetPassword = () => {
  const { height } = Dimensions.get("window");
  const { fields, setFields } = ForgetPasswordFields()
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
            text='Verify Your Phone Number'
          />
          <TextSecondary
            text="We'll send a verification code to this Phone Number to confirm your account."
          />
          {
            fields?.map((field: FieldsType) => RenderField(field, setFields))
          }

          <ButtonBG
            style={{
              marginTop: 10
            }}
            text='Send'
            handler={() => handleSignIn(fields, setFields)}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  forget: {
    marginLeft: "auto",
    marginTop: -24
  }
})