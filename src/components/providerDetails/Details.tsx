import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderSecondary from '../shered/HeaderSecondary'
import TextPrimary from '../shered/TextPrimary'
import TextSecondary from '../shered/TextSecondary'

const Details = () => {
  return (
    <View style={{
      marginTop: 10
    }}>
      <HeaderSecondary
        key={6}
        style={{
          fontWeight: 700,
        }}
        text='Description  :- '
      />,
      <TextPrimary
        key={7}
        text="Delivering professional, reliable, and efficient service in your area, this provider brings a strong reputation and years of experience. Whether it's home maintenance, repairs, or skilled labor, you'll benefit from clean execution, attention to detail, and a commitment to customer satisfaction"
      />,
      <TextSecondary
        key={6}
        style={{
          fontWeight: 700,
          marginTop: 10
        }}
        text='📋 Service Details'
      />,
      <TextPrimary
        key={7}
        text="Delivering professional, reliable, and efficient service in your area, this provider brings a strong reputation and years of experience. Whether it's home maintenance, repairs, or skilled labor, you'll benefit from clean execution, attention to detail, and a commitment to customer satisfaction"
      />,
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})