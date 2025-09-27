import React from "react";
import { Image, StyleSheet, View } from "react-native";
import FlexText from "../../components/shered/FlexText";
import HeaderDesign from "../../components/shered/HeaderDesign";
import TextPrimary from "../../components/shered/TextPrimary";
import TextSecondary from "../../components/shered/TextSecondary";
import ButtonBG from "../../components/ui/buttons/ButtonBG";
import SafeAreaProviderNoScroll from "../../providers/SafeAreaProviderNoScroll";
import Navigate from "../../utils/Navigate";
import ScreenSize from "../../utils/ScreenSize";

const PostService = () => {
  const { width, height } = ScreenSize();
  const navigate = Navigate();
  return (
    <SafeAreaProviderNoScroll backButtonText="My Service">
      <View
        style={{
          backgroundColor: "#FFF",
          padding: 10,
          borderRadius: 10,
          position: "relative",
          marginTop: 20,
        }}
      >
        <Image
          src="https://placehold.co/400x400/png"
          style={{
            width: width - 60,
            height: (width / 3) * 1.7,
            borderRadius: 10,
          }}
        />
        <TextSecondary
          text="Cleaning"
          style={{
            backgroundColor: "#FFF",
            padding: 6,
            position: "absolute",
            top: 20,
            left: 20,
            borderRadius: 6,
          }}
        />
        <TextSecondary
          text="⭐ 4.5"
          style={{
            backgroundColor: "#FFF",
            padding: 6,
            position: "absolute",
            top: 20,
            right: 20,
            borderRadius: 6,
          }}
        />
        <HeaderDesign text="Cleaning Service" />
        <FlexText
          style={{
            justifyContent: "space-between",
          }}
        >
          <TextPrimary text="Email   :" />
          <TextSecondary text="Marvin@gmail.com" />
        </FlexText>
        <FlexText
          style={{
            justifyContent: "space-between",
          }}
        >
          <TextPrimary text="Contact Number :" />
          <TextSecondary text="(603) 555-0123" />
        </FlexText>
        <FlexText
          style={{
            justifyContent: "space-between",
          }}
        >
          <TextPrimary text="Starting Price :" />
          <TextSecondary text="₦24.00" />
        </FlexText>
        <FlexText
          style={{
            justifyContent: "space-between",
          }}
        >
          <TextPrimary text="Service Location :" />
          <TextSecondary
            style={{
              width: 150,
            }}
            text="2715 Ash Dr. San Jose, South Dakota 83475"
          />
        </FlexText>
        <FlexText style={{}}>
          <ButtonBG
            style={{
              width: "auto",
            }}
            text="View  Details"
            handler={() => navigate("ServiceDetails")}
          />
        </FlexText>
      </View>
    </SafeAreaProviderNoScroll>
  );
};

export default PostService;

const styles = StyleSheet.create({});
