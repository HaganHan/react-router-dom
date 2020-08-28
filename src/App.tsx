import React from 'react'

import BrowserRouter from '~router/BrowserRouter'
import '~src/public.scss'

const App = (): JSX.Element => {
  return (
    <article className="App">
      <BrowserRouter />
    </article>
  )
}

export default App
