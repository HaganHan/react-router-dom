import React from 'react'
import { createBrowserHistory } from 'history'

import { ContextBrowserRouter } from '~src/react-router-dom/context'

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BrowserRouter = (props: Props): JSX.Element => {
  const history = createBrowserHistory()
  const { Provider } = ContextBrowserRouter
  return (
    <Provider value={{ history }}>
      { props.children }
    </Provider>
  )
}

export default BrowserRouter
