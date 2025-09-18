import React, { ReactNode } from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import FlexText from './FlexText'
import HeaderSecondary from './HeaderSecondary'
import TextSecondary from './TextSecondary'

const ImageFlex = ({
  image = 'https://placehold.co/400x400.png',
  text1 = 'text 1',
  text = "text",
  component
}: {
  image?: string | ImageSourcePropType,
  text?: string,
  text1?: string,
  component?: ReactNode
}) => {
  return (
    <FlexText style={{
      marginVertical: 5
    }}>
      {
        component ? component : <Image
          src={image as string}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50
          }}
        />
      }

      <View>
        <HeaderSecondary
          style={{ fontWeight: "700" }}
          text={text}
        />
        <TextSecondary
          text={text1}
        />
      </View>
    </FlexText>
  )
}

export default ImageFlex

const styles = StyleSheet.create({})