import React from "react";
import { StyleSheetProperties, Text, TextInput, View } from "react-native";

const Input = ({
  type,
  style,
  inputStyle,
  placeHolder = "Please enter",
  label = "Enter your",
  error = false,
  handler,
  value,
  name,
}: {
  type: string;
  style?: StyleSheetProperties;
  inputStyle?: StyleSheetProperties;
  placeHolder?: string;
  label?: string;
  error?: boolean;
  handler?: (name: string) => void;
  value?: string;
  name?: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        ...style,
      }}
    >
      <Text
        style={{
          marginVertical: 4,
          color: error ? "red" : "#000000",
        }}
      >
        {label}
      </Text>
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
        keyboardType={type as any}
        onChangeText={(text) => handler?.(name as string)}
      />
    </View>
  );
};

export default Input;
