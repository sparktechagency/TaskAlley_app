import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import NotificationCard from "../../../components/notification/NotificationCard";
import TextPrimary from "../../../components/shered/TextPrimary";
import SafeAreaProviderNoScroll from "../../../providers/SafeAreaProviderNoScroll";

const Notifications = () => {
  return (
    <SafeAreaProviderNoScroll backButtonText="Notifications">
      <TouchableOpacity
        style={{
          marginLeft: "auto",
        }}
      >
        <TextPrimary
          style={{
            color: "#0EA5E9",
          }}
          text="mark as read"
        />
      </TouchableOpacity>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => item?.toString()}
        renderItem={({ item, index }) => <NotificationCard />}
      />
    </SafeAreaProviderNoScroll>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
