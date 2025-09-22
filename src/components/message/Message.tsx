import React from 'react'
import { StyleSheet } from 'react-native'
import TextPrimary from '../shered/TextPrimary'

const Message = ({ i }: { i: number }) => {
  return <TextPrimary
    text={`this is message ${i}`}
    style={{
      ...(i % 2 == 0 ? {
        marginLeft: "auto",
        backgroundColor: "#FFFFFF"
      } : { marginRight: "auto", backgroundColor: "#E6F4F1" }),
      borderRadius: 10,
      width: "auto",
      padding: 8
    }}
  />
}

export default Message

const styles = StyleSheet.create({})