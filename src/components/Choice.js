import React, { PropTypes } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 5,
    backgroundColor: '#80DEEA',
  },
  text: {
    textAlign: 'center',
  },
});

const Choice = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.label}</Text>
  </View>
);

Choice.propTypes = {
  label: PropTypes.string,
};

export default Choice;
