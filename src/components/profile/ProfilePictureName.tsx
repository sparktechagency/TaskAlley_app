import React from 'react'
import { Image, StyleSheet } from 'react-native'
import FlexText from '../shered/FlexText'
import HeaderSecondary from '../shered/HeaderSecondary'

const ProfilePictureName = () => {
  return (
    <FlexText style={{
      flexDirection: "column",
      marginTop: 10
    }}>
      <Image
        src="https://placehold.co/400x400.png"
        style={{
          width: 100,
          height: 100,
          borderRadius: 100
        }}
      />
      <HeaderSecondary
        text='Shaharul Siyam'
      />
    </FlexText>
  )
}

export default ProfilePictureName

const styles = StyleSheet.create({})