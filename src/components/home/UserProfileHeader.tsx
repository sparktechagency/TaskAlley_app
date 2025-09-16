import React from 'react'
import { StyleSheet, View } from 'react-native'
import FlexText from '../shered/FlexText'
import HeaderSecondary from '../shered/HeaderSecondary'
import TextSecondary from '../shered/TextSecondary'

const UserProfileHeader = () => {
  return (
    <FlexText >
      <View>
        <HeaderSecondary
          text={`Hello Siyam`}
        />
        <TextSecondary
          text={`Welcome to Servify`}
        />
      </View>

    </FlexText>
  )
}

export default UserProfileHeader

const styles = StyleSheet.create({})