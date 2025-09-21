import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { otherIcons } from "../../constant/images";
import SafeAreaProviderNoScroll from "../../providers/SafeAreaProviderNoScroll";
import BackButton from "../shered/BackButton";
import FlexText from "../shered/FlexText";
import HeaderDesign from "../shered/HeaderDesign";
import HeaderSecondary from "../shered/HeaderSecondary";
import ImageFlex from "../shered/ImageFlex";
import TextPrimary from "../shered/TextPrimary";
import TextSecondary from "../shered/TextSecondary";
import BlueBadgeOpacity30 from "../ui/badges/BlueBadgeOpacity30";
import ButtonBG from "../ui/buttons/ButtonBG";
import ButtonGreenOpacity30 from "../ui/buttons/ButtonGreenOpacity30";
import ButtonTransparentBG from "../ui/buttons/ButtonTransparentBG";
import Bids_Question from "./Bids_Question";
import ProgressBar from '../shered/ProgressBar';
import TaskProgress from './TaskProgress';

const DetailsTask = ({
  heading = "Tasks Details",
  status = "inprogress",
}: {
  heading?: "Tasks Details" | "My Tasks Details";
  status?: "inprogress" | "open";
}) => {
  const elements = [
    <ButtonGreenOpacity30
      key={1}
      activeOpacity={1}
      text="Open for Bids "
      style={{
        backgroundColor: "#FFEDD5",
        width: 200,

        borderRadius: 8,
        marginVertical: 10,
      }}
      textStyle={{
        color: "#F97316",
        fontWeight: 700,
      }}
    />,
    <HeaderDesign key={2} text="Help move a couch" />,
    <TextSecondary
      style={{
        marginBottom: 10,
      }}
      text="Task ID #1233"
      key={3}
    />,

    heading == "My Tasks Details" ? (
      <Image
        key={5}
        src="https://placehold.co/400x400.png"
        style={{
          width: 200,
          height: 120,
          borderRadius: 10,
        }}
      />
    ) : (
      <ImageFlex
        key={4}
        image={`https://placehold.co/400x400.png`}
        text="Posted by"
        text1="Marvin Fey"
      />
    ),
    <ImageFlex
      component={
        <BlueBadgeOpacity30 icon={otherIcons.Location as ImageSourcePropType} />
      }
      key={5}
      text="Location"
      text1="New York, USA"
    />,
    <ImageFlex
      component={
        <BlueBadgeOpacity30 icon={otherIcons.Calendar as ImageSourcePropType} />
      }
      key={6}
      text="to be done on  "
      text1="15 May 2020 8:00 am"
    />,
    <HeaderSecondary
      key={7}
      style={{
        fontWeight: 700,
      }}
      text="Details"
    />,
    <TextPrimary
      key={8}
      text="I'm after 2 palettes that are sold out online but available from 2 specific stores.  They meed to be sent out to you in the US and then forwarded to me in Sydney in 1 package for convenience. For more information please direct message me! Paid!"
    />,

    heading == "My Tasks Details" ? (
      status == "inprogress" ? (
        <></>
      ) : (
        <FlexText
          key={9}
          style={{
            justifyContent: "center",
            marginTop: 10,
            alignItems: "center",
            flexDirection: "column",
            padding: 20,
            backgroundColor: "#E6F4F1",
            borderRadius: 5,
          }}
        >
          <TextSecondary text="Task budget " />
          <HeaderDesign text="₦24.00" />
          <FlexText>
            <ButtonTransparentBG
              style={{
                width: "auto",
              }}
              text="Edit Task"
            />
            <ButtonBG
              style={{
                width: "auto",
              }}
              text="Remove the task."
              handler={() => { }}
            />
          </FlexText>
        </FlexText>
      )
    ) : (
      <FlexText
        key={9}
        style={{
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View>
          <TextSecondary text="Task budget " />
          <HeaderDesign text="₦24.00" />
        </View>
        <ButtonBG
          style={{
            width: "auto",
          }}
          text="Submit a Bid"
          handler={() => { }}
        />
      </FlexText>
    ),

    status != "inprogress" ? (
      <Bids_Question from="My Tasks Details" key={10} />
    ) : (
      <></>
    ),
    status == "inprogress" ? (
      <TaskProgress key={11} />
    ) : (
      <></>
    ),
  ];
  return (
    <SafeAreaProviderNoScroll>
      <BackButton text={heading} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
        data={elements}
        renderItem={({ item }) => item}
      />
    </SafeAreaProviderNoScroll>
  );
};

export default DetailsTask;

const styles = StyleSheet.create({});
