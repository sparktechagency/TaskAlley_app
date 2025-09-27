import React, { useState } from "react";
import { StyleSheet } from "react-native";
import TabButton from "../../components/mytask/TabButton";
import FlexImages from "../../components/providerDetails/FlexImages";
import Review from "../../components/providerDetails/Review";
import Description from "../../components/serviceDetails/Description";
import FlexText from "../../components/shered/FlexText";
import HeaderDesign from "../../components/shered/HeaderDesign";
import SectionHeading from "../../components/shered/SectionHeading";
import TextPrimary from "../../components/shered/TextPrimary";
import TextSecondary from "../../components/shered/TextSecondary";
import SafeAreaProvider from "../../providers/SafeAreaProvider";

const ServiceDetails = () => {
  const [tab, setTab] = useState("Description");

  return (
    <SafeAreaProvider backButtonText="My Service Details">
      <SectionHeading
        style={{
          marginTop: 10,
        }}
        text="My Service Details"
        showViewButton={false}
      />
      <TextPrimary
        style={{
          color: "#115E59",
          backgroundColor: "#E6F4F1",
          width: 100,
          textAlign: "center",
          padding: 5,
          borderRadius: 10,
          marginTop: 10,
        }}
        text="Cleaning"
      />
      <HeaderDesign text="Office Cleaning Service" />
      <FlexImages />
      <FlexText
        style={{
          padding: 20,
          backgroundColor: "#E6F4F1",
          marginTop: 10,
          borderRadius: 10,
          justifyContent: "space-between",
        }}
      >
        <TextSecondary text="Starting Price" />
        <HeaderDesign text="₦24.00" />
      </FlexText>

      <TabButton
        handler={(tab) => setTab(tab)}
        tab={["Description", "Reviews"]}
      />
      {tab == "Description" ? <Description /> : <Review />}
    </SafeAreaProvider>
  );
};

export default ServiceDetails;

const styles = StyleSheet.create({});
