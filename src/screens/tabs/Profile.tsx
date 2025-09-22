import React from "react";
import { FlatList } from "react-native";
import ProfileOptions from '../../components/profile/ProfileOptions';
import ProfilePictureName from '../../components/profile/ProfilePictureName';
import SafeAreaProviderNoScroll from '../../providers/SafeAreaProviderNoScroll';

const Profile = () => {
  const elements = [
    <ProfilePictureName key={1} />,
    <ProfileOptions key={2} />
  ];
  return (
    <SafeAreaProviderNoScroll>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
        data={elements}
        renderItem={({ item }) => item}
      />
    </SafeAreaProviderNoScroll>
  );
};


export default Profile;

