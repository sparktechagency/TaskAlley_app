import React from 'react'
import { StyleSheet, View } from 'react-native'
import Bids_QuestionCard from './Bids_QuestionCard'

const Bids = () => {
  return (
    <View
      style={{
        marginTop: 10
      }}
    >
      {
        [...Array(5).keys()]?.map(item => <Bids_QuestionCard />)
      }
    </View>
  )
}

export default Bids


const styles = StyleSheet.create({})