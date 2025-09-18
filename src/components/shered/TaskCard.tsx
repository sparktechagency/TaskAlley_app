import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import FlexText from './FlexText'
import HeaderDesign from './HeaderDesign'
import HeaderSecondary from './HeaderSecondary'
import TextPrimary from './TextPrimary'
import TextSecondary from './TextSecondary'

const TaskCard = () => {
  return (
    <TouchableOpacity style={{
      backgroundColor: "#FFFFFF",
      padding: 10,
      borderRadius: 6,
      marginTop: 10
    }}>
      <FlexText
        style={{
          justifyContent: "space-between"
        }}
      >
        <HeaderDesign
          style={{
            fontSize: 18,
          }}
          text='Help move a couch'
        />
        <HeaderDesign
          style={{
            fontSize: 18,
          }}
          text='₦24.00'
        />
      </FlexText>
      <FlexCard text='Los Angeles CA 90024' image={otherIcons.Location as ImageSourcePropType} />
      <FlexCard text='New York, USA' image={otherIcons.Calendar as ImageSourcePropType} />
      <FlexCard text='15 May 2020 8:00 am' image={otherIcons.Watch as ImageSourcePropType} />
      <FlexText style={{
        marginTop: 6,
        gap: 10
      }}>
        <Image
          src='https://placehold.co/400x400.png'
          style={{
            height: 50,
            width: 50,
            borderRadius: 50
          }}
        />
        <View>
          <HeaderSecondary
            style={{
              fontWeight: "700"
            }}
            text='Marvin Fey' />
          <FlexText>
            <TextPrimary
              style={{
                color: "#F97316",
                fontWeight: "700"
              }}
              text='Open'
            />
            <TextPrimary
              text='• 1 offered'
            />
          </FlexText>
        </View>
      </FlexText>
    </TouchableOpacity>
  )
}

export default TaskCard

const FlexCard = ({
  text,
  image
}: {
  text: string,
  image: ImageSourcePropType
}) => {
  return (
    <FlexText
      style={{
        marginTop: 6
      }}
    >
      <Image
        source={image}
      />
      <TextSecondary
        text={text}
      />
    </FlexText>
  )
}


const styles = StyleSheet.create({})