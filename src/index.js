import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import App from './layout/App'
import AppImmer from './layout/AppImmer'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <>
      <App />
      <AppImmer />
    </>
  </Provider>,
  document.getElementById('root')
)
