import React from 'react'
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { otherIcons } from '../../constant/images'
import FlexText from './FlexText'
import HeaderSecondary from './HeaderSecondary'
import TextPrimary from './TextPrimary'

const SectionHeading = ({
  color = "#1F2937",
  handler,
  text = "heading"
}: {
  color?: string,
  handler?: () => void,
  text?: string
}) => {
  return (
    <FlexText
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FlexText
        style={{
        }}
      >
        <Image
          source={otherIcons.Represent as ImageSourcePropType}
          style={{
            tintColor: color
          }}
        />
        <HeaderSecondary
          text={text}
          style={{
            fontWeight: "700",
            fontSize: 18,
            color
          }}
        />
      </FlexText>
      <TouchableOpacity
        onPress={() => handler?.()}
      >
        <TextPrimary
          style={{
            color: "#0EA5E9"
          }}
          text={`View All`}
        />
      </TouchableOpacity>
    </FlexText>
  )
}

export default SectionHeading
