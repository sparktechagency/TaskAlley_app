import React from 'react'
import { Image, ImageSourcePropType, ImageStyle, StyleSheet, TouchableOpacity, View } from 'react-native'
import { otherIcons } from '../../constant/images'
import Navigate from '../../utils/Navigate'
import ButtonBG from '../ui/buttons/ButtonBG'
import GreenLine from '../ui/line/GreenLine'
import FlexCardIcon from './FlexCardIcon'
import FlexText from './FlexText'
import HeaderDesign from './HeaderDesign'
import HeaderSecondary from './HeaderSecondary'
import TextPrimary from './TextPrimary'

const TaskCard = ({
  imageStyle,
  showDetailsButton = false
}: {
  imageStyle?: ImageStyle,
  showDetailsButton?: boolean
}) => {
  const navigate = Navigate()
  return (
    <TouchableOpacity
      activeOpacity={showDetailsButton ? 1 : .7}
      onPress={() => showDetailsButton ? null : navigate("TaskDetails")}
      style={{
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
      {
        showDetailsButton && <GreenLine />
      }

      <FlexCardIcon text='Los Angeles CA 90024' image={otherIcons.Location as ImageSourcePropType} />
      <FlexCardIcon text='New York, USA' image={otherIcons.Calendar as ImageSourcePropType} />
      <FlexCardIcon text='15 May 2020 8:00 am' image={otherIcons.Watch as ImageSourcePropType} />
      <FlexText style={{
        marginTop: 6,
        gap: 10
      }}>
        <Image
          src='https://placehold.co/400x400.png'
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            ...imageStyle
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
      {
        showDetailsButton && <>
          <GreenLine />
          <ButtonBG
            style={{
              width: 120,
            }}
            text='Details'
            handler={() => navigate("MyTaskDetails")}
          />
        </>
      }

    </TouchableOpacity>
  )
}

export default TaskCard



const styles = StyleSheet.create({})