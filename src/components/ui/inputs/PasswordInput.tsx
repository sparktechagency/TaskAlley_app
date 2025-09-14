import React, { useState } from "react";
import {
  Image,
  ImageBackgroundProps,
  StyleSheetProperties,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { otherIcons } from "../../../constant/images";
import HeaderSecondary from '../../shered/HeaderSecondary';

const PasswordInput = ({
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
  const [show, setShow] = useState(true);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        position: "relative",
        ...style,
      }}
    >
      <HeaderSecondary
        style={{
          color: error ? "red" : "#111827",
        }}
        text={label}
      />
      <TextInput
        secureTextEntry={show}
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
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 4,
          top: 45,
        }}
        activeOpacity={0.7}
        onPress={() => setShow(!show)}
      >
        <Image
          source={
            show
              ? (otherIcons?.EyeX as ImageBackgroundProps)
              : (otherIcons?.Eye as ImageBackgroundProps)
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
