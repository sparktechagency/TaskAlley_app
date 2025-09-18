import React from 'react'
import { View } from 'react-native'
import Bids_QuestionCard from './Bids_QuestionCard'
import QuestionForm from './QuestionForm'

const Questions = () => {
  return (
    <View>
      <QuestionForm />
      {
        [...Array(5).keys()]?.map(item => <Bids_QuestionCard type='question' />)
      }
    </View>
  )
}

export default Questions
