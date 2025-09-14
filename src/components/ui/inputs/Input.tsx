import React from "react";
import { KeyboardType, StyleSheetProperties, TextInput, View } from "react-native";
import HeaderSecondary from '../../shered/HeaderSecondary';

const Input = ({
  keyboard,
  style,
  inputStyle,
  placeHolder = "Please enter",
  label = "Enter your",
  error = false,
  handler,
  value,
  name,
  required = true
}: {
  keyboard: string;
  style?: StyleSheetProperties;
  inputStyle?: StyleSheetProperties;
  placeHolder?: string;
  label?: string;
  error?: boolean;
  handler?: (name: string, value: string) => void;
  value?: string;
  name?: string;
  required?: boolean
}) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        ...style,
      }}
    >
      <HeaderSecondary
        style={{
          color: required ? error ? "red" : "#111827" : "#111827",
        }}
        text={label}
      />
      <TextInput
        value={value}
        style={{
          backgroundColor: "#E6F4F1",
          padding: 15,
          borderRadius: 8,
          ...(error
            ? {
              borderColor: "red",
              borderWidth: 1,
            }
            : {}),
          ...inputStyle,
        }}
        placeholder={placeHolder}
        keyboardType={keyboard as KeyboardType}
        onChangeText={(text) => handler?.(name as string, text)}
      />
    </View>
  );
};

export default Input;
