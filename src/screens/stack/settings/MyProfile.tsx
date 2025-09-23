import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'
import ButtonBG from '../../../components/ui/buttons/ButtonBG'
import { otherIcons } from '../../../constant/images'
import profileUpdateFields from '../../../formFields/profileUpdateFields'
import SafeAreaProvider from '../../../providers/SafeAreaProvider'
import { FieldsType } from '../../../types/Types'
import { RenderField } from '../../../utils/RenderField'

const MyProfile = () => {
  const { fields, setFields } = profileUpdateFields()
  return (
    <SafeAreaProvider
      backButtonText='My Profile'
    >
      <View
        style={{
          height: 100,
          width: 100,
          position: "relative",
          borderRadius: 100,
          marginHorizontal: "auto",
          marginVertical: 10,
        }}
      >
        <Image
          src={`https://placehold.co/400x400.png`}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,

          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 3,
            bottom: 3,
            padding: 6,
            backgroundColor: "#E6F4F1",
            borderRadius: 100
          }}
        >
          <Image
            source={otherIcons.Edit as ImageSourcePropType}
          />
        </TouchableOpacity>
      </View>
      {fields?.map((field: FieldsType) => RenderField(field, setFields))}
      <ButtonBG
        style={{
          marginTop: 10
        }}
        text="Update"
        handler={() => {

        }}
      />
    </SafeAreaProvider>
  )
}

export default MyProfile

const styles = StyleSheet.create({})