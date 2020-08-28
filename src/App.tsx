import React from 'react'

import '~src/public.scss'
import People from '~src/pages/People'
import { NavLink, Route, BrowserRouter } from '~router/index'

const App = (): JSX.Element => {
  return (
    <article className="App">
      <BrowserRouter>
        <section className="nav">
          <NavLink to="/people">people</NavLink>
        </section>
        <hr />
        <section>
          <Route
            exact
            path="/people"
            component={People}
          />
        </section>
      </BrowserRouter>

      <style jsx>{`
        .nav {
          display: flex;
        }

        .nav > * {
          padding: 10px;
        }
      `}</style>
    </article>
  )
}

export default App
