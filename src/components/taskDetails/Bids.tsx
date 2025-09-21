import React from "react";
import { View } from "react-native";
import Bids_QuestionCard from "./Bids_QuestionCard";

const Bids = ({
  from = "Tasks Details",
}: {
  from?: "Tasks Details" | "My Tasks Details";
}) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      {[...Array(5).keys()]?.map((item) => (
        <Bids_QuestionCard type="bids" from={from} />
      ))}
    </View>
  );
};

export default Bids;
