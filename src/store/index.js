import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '~src/store/reducers'

let store

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true })
  store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk, logger))
  )
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers)
    })
  }
} else {
  store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
  )
}

export default store
