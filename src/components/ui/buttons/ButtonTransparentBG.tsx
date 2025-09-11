import React from "react";
import { StyleSheetProperties, Text, TouchableOpacity } from "react-native";

const ButtonTransparentBG = ({
  style,
  text,
  handler,
}: {
  style?: StyleSheetProperties;
  text?: string;
  handler: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handler?.();
      }}
      activeOpacity={0.7}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        borderColor: "#115E59",
        borderWidth: 2,
        backgroundColor: "transparent",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...style,
      }}
    >
      <Text
        style={{
          color: "#115E59",
        }}
      >
        {text ? text : "Close"}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonTransparentBG;
