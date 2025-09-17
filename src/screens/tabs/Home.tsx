import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import CategorySection from '../../components/home/CategorySection';
import UserProfileHeader from '../../components/home/UserProfileHeader';
import SearchBar from '../../components/shered/SearchBar';
import SafeAreaProviderNoScroll from '../../providers/SafeAreaProviderNoScroll';

const Home = () => {
  const { height } = Dimensions.get("window");
  const elements = [
    <UserProfileHeader key={1} />,
    <SearchBar key={2} />,
    <CategorySection key={3} />,

  ]
  return (
    <SafeAreaProviderNoScroll
    >
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: 150
        }}
        showsVerticalScrollIndicator={false}
        data={elements}
        renderItem={({ item }) => item}

      />
    </SafeAreaProviderNoScroll>
  );
};

export default Home;

const styles = StyleSheet.create({});
