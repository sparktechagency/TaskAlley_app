import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskCard from "../shered/TaskCard";
const data = [
  {
    title: "Help move a couch",
    price: "₦24.00",
    location_address: "Los Angeles CA 90024",
    location_city: "New York, USA",
    date: "15 May 2020 8:00 am",
    user: {
      name: "Marvin Fey",
      status: "Open",
      offers: "1 offered",
    },
    image: "",
  },
  {
    title: "Help move a couch",
    price: "₦24.00",
    location_address: "Los Angeles CA 90024",
    location_city: "New York, USA",
    date: "15 May 2020 8:00 am",
    user: {
      name: "Marvin Fey",
      status: "Open",
      offers: "1 offered",
    },
    image: "",
  },
  {
    title: "Help move a couch",
    price: "₦24.00",
    location_address: "Los Angeles CA 90024",
    location_city: "New York, USA",
    date: "15 May 2020 8:00 am",
    user: {
      name: "Marvin Fey",
      status: "Open",
      offers: "1 offered",
    },
    image: "",
  },
  {
    title: "Help move a couch",
    price: "₦24.00",
    location_address: "Los Angeles CA 90024",
    location_city: "New York, USA",
    date: "15 May 2020 8:00 am",
    user: {
      name: "Marvin Fey",
      status: "Open",
      offers: "1 offered",
    },
    image: "",
  },
  {
    title: "Help move a couch",
    price: "₦24.00",
    location_address: "Los Angeles CA 90024",
    location_city: "New York, USA",
    date: "15 May 2020 8:00 am",
    user: {
      name: "Marvin Fey",
      status: "Open",
      offers: "1 offered",
    },
    image: "",
  },
  {
    title: "Help move a couch",
    price: "₦24.00",
    location_address: "Los Angeles CA 90024",
    location_city: "New York, USA",
    date: "15 May 2020 8:00 am",
    user: {
      name: "Marvin Fey",
      status: "Open",
      offers: "1 offered",
    },
    image: "",
  },
];

const FIlteredTask = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TaskCard
          from='user'
        />}
      />
    </View>
  );
};

export default FIlteredTask;

const styles = StyleSheet.create({});
