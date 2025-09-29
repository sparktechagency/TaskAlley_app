import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { otherIcons, profileIcons, TabIcons } from "../../constant/images";
import { useGlobalContext } from '../../providers/GlobalContextProvider';
import ProfileOptionsButton from "./ProfileOptionsButton";

const ProfileOptions = () => {
  const { role } = useGlobalContext()
  const data = [
    {
      name: "My Profile",
      image: TabIcons.Profile,
      navigate: "MyProfile",
    },
    {
      name: "Change Password",
      image: profileIcons.Lock,
      navigate: "ChangePassword",
    },
    {
      name: "Referral & Discounts",
      image: profileIcons.Refer,
      navigate: "ReferDiscounts",
    },
    ...(role == "service" ? [{
      name: "Earnings",
      image: profileIcons.Earning,
      navigate: "Earnings",
    }] : []),
    {
      name: "Linked Account",
      image: profileIcons.Card,
      navigate: "SavedAccount",
    },
    {
      name: "Notification",
      image: otherIcons.Notifications,
      navigate: "Notifications",
    },
    {
      name: "Terms & Condition",
      image: profileIcons.Terms,
      navigate: "Terms",
    },
    {
      name: "Privacy policy",
      image: profileIcons.Privacy,
      navigate: "PrivacyPolicy",
    },
    {
      name: "Help/Support",
      image: profileIcons.Question,
      navigate: "Help",
    },

  ];
  return (
    <View>
      {data?.map((item, i) => (
        <ProfileOptionsButton
          name={item?.name}
          icon={item?.image as ImageSourcePropType}
          href={item?.navigate}
          key={i}
        />
      ))}
    </View>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({});
