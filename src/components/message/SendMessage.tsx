import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { otherIcons } from '../../constant/images'
import { SelectImage } from '../../utils/imagePick'
import FlexText from '../shered/FlexText'

const SendMessage = () => {
  return (
    <FlexText style={{
      height: 60,
      justifyContent: "space-between",
    }}>
      <TouchableOpacity
        onPress={() => SelectImage()}
      >
        <Image
          source={otherIcons.Image as ImageSourcePropType}
          style={{
            tintColor: "#115E59"
          }}
        />
      </TouchableOpacity>
      <TextInput style={{
        borderWidth: 1,
        width: "70%",
        height: 40,
        borderRadius: 20
      }} placeholder='test' />
      <TouchableOpacity
      >
        <Image
          source={otherIcons.Send as ImageSourcePropType}
          style={{
            tintColor: "#115E59"
          }}
        />
      </TouchableOpacity>
    </FlexText>
  )
}

export default SendMessage

const styles = StyleSheet.create({})