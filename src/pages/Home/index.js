import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withNavigation } from '@exponent/ex-navigation'

import Router from 'greenquiz/src/Router.js'
import { Button } from 'greenquiz/src/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

type PropsType = {
  navigator: any,
}

@withNavigation
class Home extends Component {
  static route = {
    navigationBar: {
      title: 'Home',
    },
  }

  _goToInfos = () => {
    this.props.navigator.push(Router.getRoute('quizItem'))
  }

  props: PropsType

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._goToInfos}>Jouer</Button>
      </View>
    )
  }
}


export default Home;
