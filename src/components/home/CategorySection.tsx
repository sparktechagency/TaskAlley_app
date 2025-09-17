import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import FlexText from '../shered/FlexText'
import HeaderSecondary from '../shered/HeaderSecondary'
import TextPrimary from '../shered/TextPrimary'

const CategorySection = ({
  color = "#1F2937"
}: { color?: string }) => {
  return (
    <View
      style={{
        marginTop: 10
      }}
    >
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
            text='Category'
            style={{
              fontWeight: "700",
              fontSize: 18,
              color
            }}
          />
        </FlexText>
        <TouchableOpacity>
          <TextPrimary
            style={{
              color: "#0EA5E9"
            }}
            text={`View All`}
          />
        </TouchableOpacity>
      </FlexText>
    </View>
  )
}

export default CategorySection

const styles = StyleSheet.create({})