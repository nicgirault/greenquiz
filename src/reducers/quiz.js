import * as types from '../actions/actionTypes'

const initialState = {
  waitingForChoice: true
}

export default function quiz(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHOICE_PRESS:
      console.log('weeeee')
      return {
        ...state,
        waitingForChoice: false
      }
    case types.NEXT_QUIZ_ITEM:
      return {
        ...state,
        waitingForChoice: true
      }
    default:
      return state
  }
}
