import React, { useState } from 'react';
import { StyleSheetProperties, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PasswordInput = ({
  type,
  style,
  inputStyle,
  placeHolder = "Please enter",
  label = "Enter your",
  error = false,
  handler,
  value,
  name
}: {
  type: string,
  style?: StyleSheetProperties,
  inputStyle?: StyleSheetProperties,
  placeHolder?: string,
  label?: string,
  error?: boolean,
  handler?: (name: string) => void;
  value?: string,
  name?: string
}) => {
  const [show, setShow] = useState(true)
  return (
    <View style={{
      backgroundColor: "transparent",
      position: "relative",
      ...style
    }}>
      <Text
        style={{
          marginVertical: 4,
          color: error ? "red" : "#000000"
        }}
      >{label}</Text>
      <TextInput
        secureTextEntry={show}
        value={value}
        style={{
          backgroundColor: "#E6F4F1",
          padding: 15,
          borderRadius: 8,
          ...(error ? {
            borderColor: "red",
            borderWidth: 1
          } : {}),
          ...inputStyle
        }}
        placeholder={placeHolder}
        keyboardType={type as any}
        onChangeText={(text) => handler?.(name as string)}
      />
      <TouchableOpacity style={{
        position: "absolute"
      }}>

      </TouchableOpacity>
    </View>
  )
}


export default PasswordInput
