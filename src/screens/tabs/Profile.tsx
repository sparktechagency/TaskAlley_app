import React from "react";
import { FlatList, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import ProfileOptions from '../../components/profile/ProfileOptions';
import ProfilePictureName from '../../components/profile/ProfilePictureName';
import FlexText from '../../components/shered/FlexText';
import TextSecondary from '../../components/shered/TextSecondary';
import { profileIcons } from '../../constant/images';
import SafeAreaProviderNoScroll from '../../providers/SafeAreaProviderNoScroll';

const Profile = () => {
  const elements = [
    <ProfilePictureName key={1} />,
    <ProfileOptions key={2} />,
    <TouchableOpacity
      key={3}
      onPress={() => { }}
      style={{
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        // backgroundColor: "#E6F4F1"
        borderWidth: 1,
        paddingVertical: 14
      }}>
      <FlexText
        style={{
          justifyContent: "space-between"
        }}
      >
        <FlexText>
          <Image
            source={profileIcons.deleteAccount as ImageSourcePropType}
            style={{
              tintColor: "#FF0000"
            }}
          />
          <TextSecondary
            style={{
              color: "#FF0000"
            }}
            text={"Delete Account"}
          />
        </FlexText>

      </FlexText>
    </TouchableOpacity>,
    <TouchableOpacity
      key={4}
      onPress={() => { }}
      style={{
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        // backgroundColor: "#E6F4F1"
        borderWidth: 1,
        paddingVertical: 14
      }}>
      <FlexText
        style={{
          justifyContent: "space-between"
        }}
      >
        <FlexText>
          <Image
            source={profileIcons.Logout as ImageSourcePropType}
            style={{
              tintColor: "#FF0000"
            }}
          />
          <TextSecondary
            style={{
              color: "#FF0000"
            }}
            text={"Log Out"}
          />
        </FlexText>

      </FlexText>
    </TouchableOpacity>
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

