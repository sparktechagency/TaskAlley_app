import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FlexText from './FlexText'
import HeaderDesign from './HeaderDesign'

const TaskCard = () => {
  return (
    <TouchableOpacity style={{
      backgroundColor: "#FFFFFF",
      padding: 10,
      borderRadius: 6,
    }}>
      <FlexText>
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
    </TouchableOpacity>
  )
}

export default TaskCard

const styles = StyleSheet.create({})