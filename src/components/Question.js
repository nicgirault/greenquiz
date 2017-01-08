import React, { PropTypes } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#81C784',
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
});

const Question = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.label}</Text>
  </View>
);

Question.propTypes = {
  label: PropTypes.string,
};

export default Question;
