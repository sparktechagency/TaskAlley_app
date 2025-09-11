import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import BlueBadgeOpacity30 from '../ui/badges/BlueBadgeOpacity30'

interface propType {
  text?: string
}
const BackButton = ({ text }: propType) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>()
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 8 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BlueBadgeOpacity30
          style={{
            borderColor: "#115E59",
            borderWidth: 1,
          }}
          component={<Image
            source={otherIcons.ArrowLeft as ImageSourcePropType}
          />}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={{
          fontSize: 20,
          fontWeight: '500',

        }}>{text}</Text>
      <Text></Text>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({})