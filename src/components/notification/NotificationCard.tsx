import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import ScreenSize from '../../utils/ScreenSize'
import FlexText from '../shered/FlexText'
import HeaderSecondary from '../shered/HeaderSecondary'
import TextSecondary from '../shered/TextSecondary'

const NotificationCard = () => {
  const { width } = ScreenSize()
  return (
    <FlexText style={{
      padding: 10,
      marginVertical: 5,
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
      justifyContent: "space-between"
    }}>
      <View style={{
        width: width - 100
      }}>
        <HeaderSecondary
          style={{
            fontSize: 18
          }}
          text="Task Accepted"
        />
        <TextSecondary
          text="A Tasker has a question about your task. Check the task details and reply to keep things moving."
        />
      </View>
      <TouchableOpacity>
        <Image
          source={otherIcons.Close as ImageSourcePropType}
          style={{
            height: 15,
            width: 15
          }}
        />
      </TouchableOpacity>
    </FlexText>
  )
}

export default NotificationCard

const styles = StyleSheet.create({})