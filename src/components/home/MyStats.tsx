import React from "react";
import { StyleSheet, View } from "react-native";
import FlexText from "../shered/FlexText";
import SectionHeading from "../shered/SectionHeading";
import MyStatsCard from "./MyStatsCard";
const data = [
  {
    name: "Total Tasks Completed",
    value: "28",
  },
  {
    name: "Tasks in Progress",
    value: "28",
  },
  {
    name: "Pending Tasks",
    value: "2",
  },
  {
    name: "Offers Made",
    value: "8",
  },
];
const MyStats = () => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <SectionHeading text="My Stats" showViewButton={false} />
      <FlexText
        style={{
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, i) => (
          <MyStatsCard item={item} key={i} />
        ))}
      </FlexText>
    </View>
  );
};

export default MyStats;

const styles = StyleSheet.create({});
