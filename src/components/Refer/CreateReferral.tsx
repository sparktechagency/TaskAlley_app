import React from "react";
import { ImageSourcePropType, View } from "react-native";
import { otherIcons } from "../../constant/images";
import FlexText from "../shered/FlexText";
import SectionHeading from "../shered/SectionHeading";
import TextPrimary from "../shered/TextPrimary";
import ButtonBG from "../ui/buttons/ButtonBG";
import IconButtonTransparent from "../ui/buttons/IconButtonTransparent";

const CreateReferral = () => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <SectionHeading
        showViewButton={false}
        color="#115E59"
        text="Your Referral Code"
      />
      <FlexText
        style={{
          borderWidth: 2,
          borderRadius: 6,
          borderColor: "#115E59",
          justifyContent: "space-between",
        }}
      >
        <TextPrimary
          style={{
            padding: 3,
          }}
          text="TASK-USER123"
        />
        <ButtonBG
          handler={() => {}}
          text="Copy Code"
          style={{
            width: "auto",
            borderRadius: 0,
          }}
        />
      </FlexText>
      <FlexText
        style={{
          marginTop: 10,
        }}
      >
        <IconButtonTransparent
          handler={() => {}}
          style={{
            width: "auto",
          }}
          text="Share Link"
          icon={otherIcons.Share as ImageSourcePropType}
        />
      </FlexText>
    </View>
  );
};

export default CreateReferral;
