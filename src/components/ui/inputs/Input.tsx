import React from 'react'
import { StyleSheetProperties, Text, TextInput, View } from 'react-native'

const Input = ({
  type,
  style,
  placeHolder = "please enter",
  label = "enter your",
  error = true
}: {
  type: string,
  style?: StyleSheetProperties,
  placeHolder?: string,
  label?: string,
  error?: boolean
}) => {
  return (
    <View>
      <Text
        style={{
          marginVertical: 4,
          color: error ? "red" : "#000000"
        }}
      >{label}</Text>
      <TextInput
        style={{
          backgroundColor: "#E6F4F1",
          padding: 15,
          borderRadius: 8,
          ...(error ? {
            borderColor: "red",
            borderWidth: 1
          } : {})
        }}
        placeholder={placeHolder}
        keyboardType={type as any}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  )
}

export default Input
