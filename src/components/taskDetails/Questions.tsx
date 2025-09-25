import React from "react";
import { View } from "react-native";
import Bids_QuestionCard from "./Bids_QuestionCard";
import QuestionForm from "./QuestionForm";

const Questions = ({
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
    <View style={{
      marginTop: from == "service" ? 0 : 10
    }}>
      {
        from == "service" && <QuestionForm />
      }
      {[...Array(5).keys()]?.map((item) => (
        <Bids_QuestionCard type="question" status={status} from={from} />
      ))}
    </View>
  );
};

export default Questions;
