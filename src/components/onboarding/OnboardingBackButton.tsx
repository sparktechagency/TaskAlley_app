import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'

const OnboardingBackButton = ({ show = true }: { show?: boolean }) => {
  return (
    <View style={{
      flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "center"
    }}>
      {
        show ? <TouchableOpacity>
          <Image
            source={otherIcons.LeftArrow as ImageSourcePropType}
          />
        </TouchableOpacity> : <View></View>
      }

      <TouchableOpacity
        onPress={() => console.log("Pressed")}
      >
        <Text style={{
          fontSize: 14,
          fontWeight: 400,
          color: "#115E59"
        }}>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnboardingBackButton

const styles = StyleSheet.create({})