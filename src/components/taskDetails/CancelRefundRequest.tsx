import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import FlexText from '../shered/FlexText'
import HeaderSecondary from '../shered/HeaderSecondary'
import ImageFlex from '../shered/ImageFlex'
import TextSecondary from '../shered/TextSecondary'
import ButtonBG from '../ui/buttons/ButtonBG'
import GreenLine from '../ui/line/GreenLine'

const CancelRefundRequest = () => {
  return (
    <View style={{
      padding: 10,
      backgroundColor: "#E6F4F1"
    }}>
      <FlexText
        style={{
          gap: 10
        }}
      >
        <Image
          source={otherIcons.Info as ImageSourcePropType}
        />
        <HeaderSecondary
          style={{
            fontWeight: 700,
            lineHeight: 20
          }}
          text='You requested to Cancel the task Via resolution center'
        />
      </FlexText>
      <GreenLine />
      <FlexText
        style={{
          justifyContent: "space-between",
        }}
      >
        <ImageFlex
          text1='Me'
          text='Requested By'
        />
        <View>
          <TextSecondary
            text='15 May'
          />
          <TextSecondary
            text='2020 8:00 am'
          />
        </View>
      </FlexText>
      <GreenLine />
      <HeaderSecondary
        text='Details'
      />
      <TextSecondary
        text={`I request the immediate cancellation of the project due to repeated breaches: poor communication, multiple missed meetings, delays without real progress, and deliverables not meeting agreed standards. I request a full refund and preservation of all evidence in accordance with Fiverr's Terms of Service, Article 5.3.`}
      />
      <GreenLine />
      <HeaderSecondary
        style={{
          width: 600
        }}
        text='Cancellation Status'
      />
      <TextSecondary
        style={{
          color: "#0EA5E9"
        }}
        text='In Progress'
      />
      <GreenLine />
      <FlexText>
        <ButtonBG
          text='Cancel the request'
          handler={() => console.log('')}
          style={{
            width: "auto"
          }}
        />
      </FlexText>
    </View>
  )
}

export default CancelRefundRequest

const styles = StyleSheet.create({})