import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import OnboardingBackButton from "../../../components/onboarding/OnboardingBackButton";
import HeaderDesign from "../../../components/shered/HeaderDesign";
import TextSecondary from "../../../components/shered/TextSecondary";
import ButtonBG from "../../../components/ui/buttons/ButtonBG";
import Dots from "../../../components/ui/dots/Dots";
import { otherIcons } from "../../../constant/images";
import SafeAreaProviderNoScroll from "../../../providers/SafeAreaProviderNoScroll";
import Navigate from "../../../utils/Navigate";

const RealTimeBooking = () => {
  const navigate = Navigate();
  return (
    <SafeAreaProviderNoScroll>
      <OnboardingBackButton show={true} />
      <View
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <Image source={otherIcons.RealTimeImage as ImageSourcePropType} />
        <HeaderDesign
          style={{
            textAlign: "center",
          }}
          text="Real-Time Booking & Tracking"
        />
        <TextSecondary
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
          text="Schedule services at your convenience and track progress in real time — from confirmation to completion."
        />
        <Dots size={3} current={1} />
        <ButtonBG
          style={{
            position: "absolute",
            bottom: 160,
            width: "100%",
          }}
          handler={() => navigate("SecurePayments")}
          text="Next"
        />
      </View>
    </SafeAreaProviderNoScroll>
  );
};

export default RealTimeBooking;

const styles = StyleSheet.create({});
