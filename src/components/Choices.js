import React, { PropTypes } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { mapValues } from 'lodash';
import Choice from './Choice';

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

const Choices = props => (
  <View style={styles.container}>
    {
      props.choices.map((choice) => {
        return (
          <Choice
            key={choice.id}
            label={choice.label}
            style={styles.choice} />
        );
      })
    }
  </View>
);

Choices.propTypes = {
  choices: PropTypes.array,
  answer: PropTypes.string,
};

export default Choices;
