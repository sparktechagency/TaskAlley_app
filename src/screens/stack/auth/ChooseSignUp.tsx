import React from "react";
import {
  ImageSourcePropType,
  StyleSheet
} from "react-native";
import HeaderDesign from "../../../components/shered/HeaderDesign";
import TextSecondary from "../../../components/shered/TextSecondary";
import ImageButton from "../../../components/ui/buttons/ImageButton";
import { otherIcons } from "../../../constant/images";
import SafeAreaProvider from "../../../providers/SafeAreaProvider";
import Navigate from "../../../utils/Navigate";

const ChooseSignUp = () => {
  const navigate = Navigate();
  return (
    <SafeAreaProvider
      style={{
        justifyContent: "center",
        flex: 1
      }}
      backButtonText="Sign Up as">

      <HeaderDesign text="Choose Your Role to Get Started" />
      <TextSecondary text="Select the profile that best suits your journey. Whether you're here to book reliable services or offer them, we’ve built the right tools just for you." />
      <ImageButton
        imageSource={otherIcons.Customer as ImageSourcePropType}
        title="Customer"
        onPress={() => navigate("CustomerSignUp")}
      />
      <ImageButton
        imageSource={otherIcons.Service as ImageSourcePropType}
        title="Service Provider"
        onPress={() => navigate("ServiceSignUp")}
      />
      {/* <ButtonBG
            text='Continue'
            handler={() => { }}
          /> */}
    </SafeAreaProvider>
  );
};

export default ChooseSignUp;

const styles = StyleSheet.create({});
