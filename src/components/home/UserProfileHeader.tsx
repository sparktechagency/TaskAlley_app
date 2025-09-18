import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
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
      <FlexText>
        <Image
          src='https://placehold.co/400x400.png'
          style={{
            height: 50,
            width: 50,
            borderRadius: 50
          }}
        />
        <View>
          <HeaderSecondary
            style={{ fontWeight: "700" }}
            text={`Hello Siyam`}
          />
          <TextSecondary
            text={`Welcome to Servify`}
          />
        </View>
      </FlexText>
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