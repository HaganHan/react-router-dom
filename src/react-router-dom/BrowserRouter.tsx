import React, { useState } from 'react'
import { createBrowserHistory } from 'history'

import { ContextBrowserRouter } from '~src/react-router-dom/context'
import { BaseProps } from '~src/interface/common'

const BrowserRouter = (props: BaseProps): JSX.Element => {
  const history = createBrowserHistory()
  const { Provider } = ContextBrowserRouter

  const [location, setLocation] = useState(history.location)

  history.listen(history => {
    setLocation(history.location)
  })

  const match = {
    path: '/',
    url: '/',
    params: {},
    isExact: location.pathname === '/'
  }
  return (
    <Provider value={{ history, location, match }}>
      { props.children }
    </Provider>
  )
}

export default BrowserRouter
