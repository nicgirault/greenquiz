import React, { PropTypes } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { mapValues } from 'lodash'
import Choice from './Choice'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    margin: 10,
  },
  choice: {
  },
  text: {
    textAlign: 'center',
  },
});

const Choices = ({ choices, onChoicePress }) => (
  <View style={styles.container}>
    {
      choices.map((choice) => {
        return (
          <Choice
            key={choice.id}
            style={styles.choice}
            onPress={onChoicePress}
          >
            {choice.label}
          </Choice>
        )
      })
    }
  </View>
)

Choices.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onChoicePress: PropTypes.func.isRequired,
}

export default Choices
