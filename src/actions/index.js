import * as types from './actionTypes'

export function choicePress(choiceId) {
  return {
    type: types.CHOICE_PRESS,
    choiceId,
  }
}

export function nextQuizItem() {
  return {
    type: types.NEXT_QUIZ_ITEM
  }
}
