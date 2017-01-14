import React, { PropTypes } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 5,
    backgroundColor: '#8BC34A',
  },
  text: {
    textAlign: 'center',
  },
});

const Choice = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

Choice.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Choice
