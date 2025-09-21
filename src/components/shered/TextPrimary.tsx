import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

const TextPrimary = ({ text, style }: { text?: string; style?: TextStyle }) => {
  return (
    <Text
      style={[
        {
          fontFamily: "Poppins",
          fontSize: 14,
          color: "#344054",
          fontWeight: 400,
          lineHeight: 20,
        },
        style,
      ]}
    >
      {text ?? "text here"}
    </Text>
  );
};

export default TextPrimary;

const styles = StyleSheet.create({});
