import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import FlexText from '../shered/FlexText'
import ButtonBG from '../ui/buttons/ButtonBG'
import Bids from './Bids'
import Questions from './Questions'
const tab = ["Bids", "Questions"]
const component = {
  Bids: <Bids />,
  Questions: <Questions />
}
const Bids_Question = () => {
  const [active, setActive] = useState(tab[0])
  return (
    <View style={{
      marginTop: 10
    }}>
      <FlexText>
        {
          tab?.map((item) => <ButtonBG
            text={item}
            style={{
              width: "auto",
              backgroundColor: item == active ? "#115E59" : "#E6F4F1",
            }}
            textStyle={{
              color: item == active ? "#FFFFFF" : "#000000",
            }}
            handler={() => setActive(item)}
          />)
        }
      </FlexText>
      {component[active as keyof typeof component]}
    </View>
  )
}

export default Bids_Question

const styles = StyleSheet.create({})