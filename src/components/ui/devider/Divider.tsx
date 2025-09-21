import React from "react";
import { View, ViewStyle } from "react-native";

const Divider = ({ style }: { style?: ViewStyle }) => {
  return (
    <View
      style={[
        {
          width: "100%",
          padding: 1,
          borderRadius: 10,
          backgroundColor: "#64748B",
        },
        style,
      ]}
    ></View>
  );
};

export default Divider;
