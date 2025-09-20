import React from 'react'
import { View } from 'react-native'
import Bids_QuestionCard from './Bids_QuestionCard'
import QuestionForm from './QuestionForm'

const Questions = ({
  from = "Tasks Details"
}: {
  from?: "Tasks Details" | "My Tasks Details"
}) => {
  return (
    <View>
      <QuestionForm />
      {
        [...Array(5).keys()]?.map(item => <Bids_QuestionCard type='question' from={from} />)
      }
    </View>
  )
}

export default Questions
