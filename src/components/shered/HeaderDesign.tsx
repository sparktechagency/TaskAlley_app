import React from "react";
import { Text, TextStyle } from "react-native";

const HeaderDesign = ({
  text,
  style,
  numberOfLines,
}: {
  text?: string;
  style?: TextStyle;
  numberOfLines?: number;
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: "Poppins",
          fontSize: 26,
          fontWeight: 500,
          color: "#111827",
        },
        style,
      ]}
    >
      {text ?? "Welcome Back!"}
    </Text>
  );
};

export default HeaderDesign;
