import React from 'react'
import { ImageSourcePropType, StyleSheet, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import FlexText from '../shered/FlexText'
import HeaderSecondary from '../shered/HeaderSecondary'
import TextSecondary from '../shered/TextSecondary'
import ImageButton from '../ui/buttons/ImageButton'

const UserProfileHeader = () => {
  return (
    <FlexText
      style={{
        marginTop: 10,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <HeaderSecondary
          style={{ fontWeight: "700" }}
          text={`Hello Siyam`}
        />
        <TextSecondary
          text={`Welcome to Servify`}
        />
      </View>
      <ImageButton
        style={{
          backgroundColor: '#E0F2F1',
          width: 40,
          height: 40,
          borderWidth: 1,
          borderColor: '#B2DFDB',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
        }}
        onPress={() => { }}
        imageSource={otherIcons.Notifications as ImageSourcePropType}
      />
    </FlexText>
  )
}

export default UserProfileHeader

const styles = StyleSheet.create({})