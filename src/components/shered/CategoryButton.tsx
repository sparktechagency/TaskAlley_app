import React from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'
import { otherIcons } from '../../constant/images'
import CircleButton from '../ui/buttons/CircleButton'
import FlexText from './FlexText'
import TextSecondary from './TextSecondary'

const CategoryButton = () => {
  return (
    <FlexText
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
      }}
    >
      <CircleButton
        imageSource={otherIcons.Category as ImageSourcePropType}
        onPress={() => { }}
      />
      <TextSecondary
        text='Cleaning'
      />
    </FlexText>
  )
}

export default CategoryButton

const styles = StyleSheet.create({})