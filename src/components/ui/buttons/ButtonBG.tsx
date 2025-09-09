import React from 'react'
import { StyleSheetProperties, Text, TouchableOpacity } from 'react-native'

const ButtonBG = ({
  style,
  text,
  handler
}: {
  style?: StyleSheetProperties,
  text?: string,
  handler: () => void
}) => {
  return (
    <TouchableOpacity
      onPress={() => { handler?.() }}
      activeOpacity={.7}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: "#115E59",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...style
      }}
    >
      <Text style={{
        color: "#FFFFFF"
      }}>{text ? text : "Close"}</Text>
    </TouchableOpacity>
  )
}

export default ButtonBG
