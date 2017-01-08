import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';
import { get } from '../../services/question';
import Question from '../../components/Question';
import Choices from '../../components/Choices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

type PropsType = {
  navigator: any,
};

@withNavigation
class QuizItem extends Component {
  props: PropsType;

  constructor(props) {
   super(props);

   this.state = {
     quizItem: null,
   };
 }

  componentDidMount() {
    this.setState({
      quizItem: get()
    });
  }

  renderQuizItemQuestion() {
    if (this.state.quizItem) {
      return (
        <Question
          label={this.state.quizItem.question}
          style={styles.question}
        />
      );
    }
    else {
      return null;
    }
  }

  renderQuizItemChoices() {
    if (this.state.quizItem) {
      console.log(this.state.quizItem.choices);
      return (
        <Choices
          choices={this.state.quizItem.choices}
          answer={this.state.quizItem.answer}
        />
      );
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderQuizItemQuestion()}
        {this.renderQuizItemChoices()}
      </View>
    );
  }
 }

export default QuizItem;
