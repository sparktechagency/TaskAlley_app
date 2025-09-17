import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import UserProfileHeader from '../../components/home/UserProfileHeader';
import SearchBar from '../../components/shered/SearchBar';
import SafeAreaProvider from '../../providers/SafeAreaProvider';

const Home = () => {
  const { height } = Dimensions.get("window");

  return (
    <SafeAreaProvider
    >
      <ScrollView
        style={{

        }}
      >
        <View>
          <UserProfileHeader />
          <SearchBar />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
