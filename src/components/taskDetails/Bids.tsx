import React from "react";
import { View } from "react-native";
import Bids_QuestionCard from "./Bids_QuestionCard";

const Bids = ({
  from = "service",
  status
}: {
  from?: "user" | "service";
  status: "All Tasks" |
  "open for bids" |
  "in Progress" |
  "completed" |
  "cancelled" | "dispute" | "Ongoing Tasks" | "Bids  Made" | "Bids  Received"
}) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      {[...Array(5).keys()]?.map((item) => (
        <Bids_QuestionCard type="bids" from={from} status={status} />
      ))}
    </View>
  );
};

export default Bids;
