import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { otherIcons, TabIcons } from "../../constant/images";
import SafeAreaProviderNoScroll from "../../providers/SafeAreaProviderNoScroll";
import Navigate from '../../utils/Navigate';
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
import IconButtonTransparent from '../ui/buttons/IconButtonTransparent';
import Bids_Question from "./Bids_Question";
import CancelRefundRequest from './CancelRefundRequest';
import FeedbackStatusButton from './FeedbackStatusButton';
import TaskProgress from "./TaskProgress";

const DetailsTask = ({
  heading = "Tasks Details",
}: {
  heading?: "Tasks Details" | "My Tasks Details";
}) => {
  const [status, setStatus] = useState<"open" | "inprogress" | "dispute">("dispute")
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
    status == "inprogress" ? <FlexText
      style={{
        justifyContent: "space-between"
      }}
    >
      <ImageFlex
        key={4}
        image={`https://placehold.co/400x400.png`}
        text="Posted by"
        text1="Marvin Fey"
      />
      <IconButtonTransparent
        text='Chat'
        icon={TabIcons.Chat as ImageSourcePropType}
        handler={() => console.log("")}
        style={{
          width: "auto",
          paddingVertical: 6
        }}
      />
    </FlexText> : <></>,
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
      status != "open" ? (
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

    (status != "inprogress" && status != "dispute") ? (
      <Bids_Question from="My Tasks Details" key={10} />
    ) : (
      <></>
    ),
    status != "open" ? <>
      <TaskProgress key={11} />
      <CancelRefundRequest />
      <FeedbackStatusButton />
    </>
      : <></>,
  ];
  const navigate = Navigate()
  return (
    <SafeAreaProviderNoScroll>
      <BackButton text={heading} show={status == "inprogress"} handler={() => navigate("RegulationsCenter")} />
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
