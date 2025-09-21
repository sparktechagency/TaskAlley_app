import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Navigate from "../../utils/Navigate";
import ProviderCard from "../shered/ProviderCard";
import SectionHeading from "../shered/SectionHeading";
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
const PopularTaskProvider = () => {
  const navigate = Navigate();
  return (
    <View style={{ marginTop: 10 }}>
      <SectionHeading
        handler={() =>
          navigate("Search", {
            type: "Provider",
          })
        }
        color="#115E59"
        text="Popular Task Provider"
      />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProviderCard />}
      />
    </View>
  );
};

export default PopularTaskProvider;

const styles = StyleSheet.create({});
