import React from "react";
import { StyleSheet, View } from "react-native";
import FlexText from "../shered/FlexText";
import HeaderDesign from "../shered/HeaderDesign";
import TextSecondary from "../shered/TextSecondary";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <View>
      <FlexText
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#E6F4F1",
          marginVertical: 10,
          borderRadius: 10,
          gap: 10,
        }}
      >
        <HeaderDesign text="4.8 ⭐" />

        <TextSecondary text="of 125 reviews" />
      </FlexText>
      {[...Array(5).keys()]?.map((item) => (
        <ReviewCard />
      ))}
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
