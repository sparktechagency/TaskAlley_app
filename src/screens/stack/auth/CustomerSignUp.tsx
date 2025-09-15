import React from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlexText from '../../../components/shered/FlexText';
import HeaderDesign from '../../../components/shered/HeaderDesign';
import HeaderSecondary from '../../../components/shered/HeaderSecondary';
import TextPrimary from '../../../components/shered/TextPrimary';
import TextSecondary from '../../../components/shered/TextSecondary';
import ButtonBG from '../../../components/ui/buttons/ButtonBG';
import Divider from '../../../components/ui/devider/Divider';
import LoginFields from '../../../formFields/LoginFields';
import { handleSignIn } from '../../../handler/signIn';
import SafeAreaProvider from '../../../providers/SafeAreaProvider';
import { FieldsType } from '../../../types/Types';
import Navigate from '../../../utils/Navigate';
import { RenderField } from '../../../utils/RenderField';

const CustomerSignUp = () => {

  const { height } = Dimensions.get("window");
  const { fields, setFields } = LoginFields()
  const { top, bottom } = useSafeAreaInsets()
  const navigate = Navigate()
  return (
    <SafeAreaProvider
      backButtonText='Sign Up as Customer'
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
            text='Create Your Account'
          />
          <TextSecondary
            text="Join our community to easily find and book the services you need, with a smooth and personalized experience from start to finish."
          />
          {
            fields?.map((field: FieldsType) => RenderField(field, setFields))
          }

          <TouchableOpacity
            onPress={() => navigate("Forget")}
            style={[styles.forget]}>
            <TextSecondary
              style={{
                color: "#115E59"
              }}
              text=' Forget Password ?'
            />
          </TouchableOpacity>

          <FlexText style={{
            marginTop: 8
          }}>
            <Divider style={{
              width: "45%"
            }} />
            <HeaderSecondary text='OR' />
            <Divider style={{
              width: "45%"
            }} />
          </FlexText>

          <FlexText style={{
            marginTop: 8,
            marginBottom: 6
          }}>
            <TextPrimary
              text='Don’t have an account?'
            />
            <TouchableOpacity
              onPress={() => navigate("ChooseSignUp")}
            >
              <TextSecondary
                style={{
                  color: "#115E59"
                }}
                text='Sign Up'
              />
            </TouchableOpacity>
          </FlexText>
          <ButtonBG
            text=' Log In'
            handler={() => handleSignIn(fields, setFields)}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default CustomerSignUp


const styles = StyleSheet.create({
  forget: {
    marginLeft: "auto",
    marginTop: -24
  }
})