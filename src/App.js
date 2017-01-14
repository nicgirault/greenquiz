import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import quizApp from './reducers'

import Scenes from './Scenes'

let store = createStore(quizApp)

const App = () => (
  <Provider store={store}>
    <Scenes />
  </Provider>
)

export default App
