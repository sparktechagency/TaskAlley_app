import { pick } from '@react-native-documents/picker'
import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { otherIcons } from '../../../constant/images'
const ImageUploader = ({ style }: { style?: ViewStyle }) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        try {
          const pickResult = await pick() as any
          const file = {
            uri: pickResult.uri,
            name: pickResult.name,
            type: pickResult.type,
          }
          // const [pickResult] = await pick({mode:'import'}) // equivalent
          // do something with the picked file
        } catch (err: unknown) {
          // see error handling
        }
      }}
      style={[{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 140,
        width: 140,
        borderRadius: 10,
        backgroundColor: "#E6F4F1"
      }, style]}>
      <Image
        source={otherIcons.Image as ImageSourcePropType}
      />
      <Text>Upload Document</Text>
    </TouchableOpacity>
  )
}

export default ImageUploader

const styles = StyleSheet.create({})