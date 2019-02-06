// Understands how to render the DOM for the entire app
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer/index.js'
import './components/reset.css'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

const root = document.getElementById('app')

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  root)

if (module.hot) {
  module.hot.accept()
}
