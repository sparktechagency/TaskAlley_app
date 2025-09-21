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

const TrustedServices = () => {
  const navigate = Navigate();
  return (
    <SafeAreaProviderNoScroll>
      <OnboardingBackButton show={false} />
      <View
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <Image source={otherIcons.TrustedImage as ImageSourcePropType} />
        <HeaderDesign
          style={{
            textAlign: "center",
          }}
          text="Find Trusted Services Instantly"
        />
        <TextSecondary
          style={{
            textAlign: "center",
            marginBottom: 20,
          }}
          text="Browse and book reliable service providers in your area — anytime, anywhere, with just a few taps."
        />
        <Dots size={3} current={0} />
        <ButtonBG
          style={{
            position: "absolute",
            bottom: 120,
            width: "100%",
          }}
          handler={() => navigate("RealTimeBooking")}
          text="Next"
        />
      </View>
    </SafeAreaProviderNoScroll>
  );
};

export default TrustedServices;

const styles = StyleSheet.create({});
