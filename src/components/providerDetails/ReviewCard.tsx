import React from "react";
import { View } from "react-native";
import ImageFlex from "../shered/ImageFlex";
import TextSecondary from "../shered/TextSecondary";

const ReviewCard = ({ type = "review" }: { type?: "review" }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        marginVertical: 5,
      }}
    >
      <ImageFlex
        showText1={type == "review"}
        text="Ronald Richards"
        text1="⭐ 4.5 (149 Reviews)"
      />
      <TextSecondary text="I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore." />
    </View>
  );
};

export default ReviewCard;
