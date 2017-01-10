var React = require('react')
var ReactDOM = require('react-dom')
var App = require('./app')

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

import { addEntity } from './actions'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('react-app')
)
