import React from 'react'
import { View } from 'react-native'
import FlexText from '../shered/FlexText'
import TextPrimary from '../shered/TextPrimary'
import TextSecondary from '../shered/TextSecondary'
import GreenLine from '../ui/line/GreenLine'

const TaskProgress = () => {
  return (
    <View style={{
      marginTop: 10
    }}>
      <FlexText
        style={{
          justifyContent: "space-between"
        }}
      >
        <TextPrimary
          text='Offered price'
        />
        <TextSecondary
          text='₦ 27.6'
        />
      </FlexText>
      <FlexText
        style={{
          justifyContent: "space-between"
        }}
      >
        <TextPrimary
          text='Discount (0%)'
        />
        <TextSecondary
          text='₦ 0'
        />
      </FlexText>
      <GreenLine />
      <FlexText
        style={{
          justifyContent: "space-between"
        }}
      >
        <TextPrimary
          text='Total'
        />
        <TextSecondary
          text='₦ 27.6'
        />
      </FlexText>
    </View>
  )
}

export default TaskProgress
