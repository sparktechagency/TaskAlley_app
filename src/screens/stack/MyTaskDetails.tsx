import { useRoute } from '@react-navigation/native';
import React from "react";
import { StyleSheet } from "react-native";
import DetailsTask from "../../components/taskDetails/DetailsTask";

const MyTaskDetails = () => {
  const {
    params: { heading, from, status },
  } = useRoute().params as {
    params: {
      heading: "Tasks Details" | "My Tasks Details"; from: "user" | "service", status: "All Tasks" |
      "open for bids" |
      "in Progress" |
      "completed" |
      "cancelled" | "dispute" | "Ongoing Tasks" | "Bids  Made" | "Bids  Received"
    }
  };
  return <DetailsTask heading={heading} from={from} status={status} />;
};

export default MyTaskDetails;

const styles = StyleSheet.create({});