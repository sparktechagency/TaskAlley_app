import React from "react";
import { Image } from "react-native";
import ScreenSize from "../../utils/ScreenSize";
import FlexText from "../shered/FlexText";

const FlexImages = () => {
  const { width } = ScreenSize();
  return (
    <FlexText
      style={{
        gap: 10,
        marginTop: 10,
      }}
    >
      <Image
        style={{
          width: (width - 60) / 2,
          height: 150,
          borderRadius: 4,
        }}
        src="https://placehold.co/600x400.png"
      />
      <FlexText
        style={{
          width: (width - 60) / 2,
          height: 150,
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {[...Array(4).keys()].map((item) => (
          <Image
            style={{
              width: (width - 70) / 4,
              height: 70,
              borderRadius: 4,
            }}
            src="https://placehold.co/600x400.png"
          />
        ))}
      </FlexText>
    </FlexText>
  );
};

export default FlexImages;
