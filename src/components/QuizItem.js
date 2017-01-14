import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import Question from './Question'
import Choices from './Choices'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
})

const QuizItem = ({quizItem, onChoicePress}) => (
  <View style={styles.container}>
    <Question
      label={quizItem.question}
      style={styles.question}
    />
    <Choices
      choices={quizItem.choices}
      onChoicePress={onChoicePress}
    />
  </View>
)

QuizItem.propTypes = {
  onChoicePress: PropTypes.func.isRequired,
  quizItem: PropTypes.object.isRequired,
}

export default QuizItem
