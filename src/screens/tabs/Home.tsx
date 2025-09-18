import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategorySection from '../../components/home/CategorySection';
import PopularTaskProvider from '../../components/home/PopularTaskProvider';
import RecentlyAddedTask from '../../components/home/RecentlyAddedTask';
import UserProfileHeader from '../../components/home/UserProfileHeader';
import SearchBar from '../../components/shered/SearchBar';
import SafeAreaProviderNoScroll from '../../providers/SafeAreaProviderNoScroll';

const Home = () => {
  const elements = [
    <UserProfileHeader key={1} />,
    <SearchBar key={2} />,
    <CategorySection key={3} />,
    <RecentlyAddedTask key={4} />,
    <PopularTaskProvider key={5} />
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
