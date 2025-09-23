import React from 'react'
import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import { otherIcons, profileIcons, TabIcons } from '../../constant/images'
import ProfileOptionsButton from './ProfileOptionsButton'
const data = [
  {
    "name": "My Profile",
    "image": TabIcons.Profile,
    "navigate": "MyProfile"
  },
  {
    "name": "Change Password",
    "image": profileIcons.Lock,
    "navigate": "ChangePassword"
  },
  {
    "name": "Refer & Discounts",
    "image": profileIcons.Refer,
    "navigate": "ReferDiscountsScreen"
  },
  {
    "name": "Shaved Account",
    "image": profileIcons.Card,
    "navigate": "ShavedAccountScreen"
  },
  {
    "name": "Notification",
    "image": otherIcons.Notifications,
    "navigate": "NotificationScreen"
  },
  {
    "name": "Terms & Condition",
    "image": profileIcons.Terms,
    "navigate": "Terms"
  },
  {
    "name": "Privacy policy",
    "image": profileIcons.Privacy,
    "navigate": "Privacy"
  },
  {
    "name": "Help/Support",
    "image": profileIcons.Question,
    "navigate": "HelpSupportScreen"
  }
]
const ProfileOptions = () => {
  return (
    <View>
      {
        data?.map((item, i) => <ProfileOptionsButton
          name={item?.name}
          icon={item?.image as ImageSourcePropType}
          href={item?.navigate}
          key={i} />)
      }
    </View>
  )
}

export default ProfileOptions

const styles = StyleSheet.create({})