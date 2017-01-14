import React, { PropTypes } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    backgroundColor: '#4CAF50',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
  },
})

const Question = ({label}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{label}</Text>
  </View>
)

Question.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Question
