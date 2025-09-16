import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import Navigate, { Navigation } from '../../utils/Navigate'

const OnboardingBackButton = ({ show = true }: { show?: boolean }) => {
  const navigate = Navigate()
  const navigation = Navigation()
  return (
    <View style={{
      flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between", marginTop: 10
    }}>
      {
        show ? <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={otherIcons.LeftArrow as ImageSourcePropType}
          />
        </TouchableOpacity> : <View></View>
      }

      <TouchableOpacity
        onPress={() => navigate("TabLayout")}
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
