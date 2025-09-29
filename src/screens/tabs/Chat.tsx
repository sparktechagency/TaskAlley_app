import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatItems from "../../components/chat/ChatItems";
import SafeAreaProviderNoScroll from "../../providers/SafeAreaProviderNoScroll";
const data = [1, 2, 3, 4, 5, 6];
const Chat = () => {
  return (
    <SafeAreaProviderNoScroll backButtonText="Messages">
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          // paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <ChatItems />}
      />
    </SafeAreaProviderNoScroll>
  );
};

export default Chat;

const styles = StyleSheet.create({});
