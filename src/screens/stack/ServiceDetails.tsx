import React from 'react'
import { StyleSheet } from 'react-native'
import TabButton from '../../components/mytask/TabButton'
import FlexImages from '../../components/providerDetails/FlexImages'
import FlexText from '../../components/shered/FlexText'
import HeaderDesign from '../../components/shered/HeaderDesign'
import SectionHeading from '../../components/shered/SectionHeading'
import TextPrimary from '../../components/shered/TextPrimary'
import TextSecondary from '../../components/shered/TextSecondary'
import SafeAreaProvider from '../../providers/SafeAreaProvider'

const ServiceDetails = () => {
  return (
    <SafeAreaProvider
      backButtonText='My Service Details'
    >

      <SectionHeading
        style={{
          marginTop: 10
        }}
        text='My Service Details'
        showViewButton={false}
      />
      <TextPrimary
        style={{
          color: "#115E59",
          backgroundColor: "#E6F4F1",
          width: 100,
          textAlign: 'center',
          padding: 5,
          borderRadius: 10,
          marginTop: 10
        }}
        text='Cleaning'
      />
      <HeaderDesign text="Office Cleaning Service" />
      <FlexImages />
      <FlexText
        style={{
          padding: 20,
          backgroundColor: "#E6F4F1",
          marginTop: 10,
          borderRadius: 10,
          justifyContent: "space-between"
        }}
      >
        <TextSecondary
          text='Starting Price'
        />
        <HeaderDesign
          text='₦24.00'
        />
      </FlexText>
      <FlexText
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#E6F4F1",
          marginVertical: 10,
          borderRadius: 10,
          gap: 10,
        }}
      >
        <HeaderDesign text="4.8 ⭐" />

        <TextSecondary text="of 125 reviews" />
      </FlexText>
      <TabButton
        tab={['Description', "Reviews"]}
      />
    </SafeAreaProvider>
  )
}

export default ServiceDetails

const styles = StyleSheet.create({})