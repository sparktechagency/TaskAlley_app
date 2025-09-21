import React from "react";
import { StyleSheet, View } from "react-native";

const Dots = ({
  size = 5,
  current = 3,
}: {
  size?: number;
  current?: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Array(size)
        .fill(0)
        .map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: index === current ? "#115E59" : "#D9D9D9",
              width: current === index ? 30 : 10,
              height: 10,
              borderRadius: 5,
              margin: 5,
            }}
          ></View>
        ))}
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({});
