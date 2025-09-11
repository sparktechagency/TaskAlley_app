import React from "react";
import { StyleSheetProperties, Text, TouchableOpacity } from "react-native";
const ButtonGreenOpacity30 = ({
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
        backgroundColor: "#E6F4F1",
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
          color: "#00000",
        }}
      >
        {text ? text : "Close"}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonGreenOpacity30;
