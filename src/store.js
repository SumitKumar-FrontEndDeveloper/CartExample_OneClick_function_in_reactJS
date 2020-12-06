import { applyMiddleware, createStore } from 'redux'

import { createWrapper } from 'next-redux-wrapper'
import { reducer } from './reducers'
import thunk from 'redux-thunk'

let middleware = [thunk]

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const initStore = () => {
  return createStore(reducer, bindMiddleware(middleware))
}

export const wrapper = createWrapper(initStore)
