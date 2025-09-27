import React from "react";
import { ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import { otherIcons } from "../../constant/images";
import ScreenSize from "../../utils/ScreenSize";
import HeaderDesign from "../shered/HeaderDesign";
import HeaderSecondary from "../shered/HeaderSecondary";

const MyStatsCard = ({ item }: { item: { name: string; value: string } }) => {
  const { width } = ScreenSize();
  return (
    <ImageBackground
      source={otherIcons.StateBg as ImageSourcePropType}
      style={{
        marginVertical: 5,
        borderRadius: 6,
        borderWidth: 0.7,
        borderColor: "#115E59",
        width: (width - 60) / 2,
        padding: 20,
        overflow: "hidden",
      }}
    >
      {/* <ImageBackground
        source={otherIcons.StateBg as ImageSourcePropType}
        style={{
          width: "100%",
          height:"100%"
        }}
      /> */}
      <HeaderSecondary
        style={{
          fontSize: 20,
        }}
        text={item?.name}
      />
      <HeaderDesign
        style={{
          fontWeight: 700,
          color: "#115E59",
        }}
        text={item?.value}
      />
    </ImageBackground>
  );
};

export default MyStatsCard;

const styles = StyleSheet.create({});
