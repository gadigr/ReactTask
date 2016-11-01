import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const presistedState = {
  todos: [
  {
    id: 999,
    asignee: 'Gadi',
    description: 'Finish react test',
    due: '2010-12-12',
    completed: false
  },
  {
    id: 998,
    asignee: 'Gadi',
    description: 'Learn some more Redux',
    due: '2011-12-12',
    completed: false
  },
  {
    id: 997,
    asignee: 'Gadi',
    description: 'Eat',
    due: '2012-12-12',
    completed: false
  }]
};

const store = createStore(reducer, presistedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
