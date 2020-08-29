import React from 'react'

import '~src/public.scss'
import { NavLink, Route, BrowserRouter, Switch } from '~src/react-router-dom/index'
import Component from '~src/pages/Component'
import Render from '~src/pages/Render'
import Children1 from '~src/pages/Children1'
import Children2 from '~src/pages/Children2'
import NotDefined from '~src/pages/NotDefined'
import Person from './pages/Person'

const App = (): JSX.Element => {
  return (
    <article className="App">
      <BrowserRouter>
        <section className="nav">
          <span><NavLink to="/component">component</NavLink></span>
          <span><NavLink to="/render">render</NavLink></span>
          <span><NavLink to="/children1">children1</NavLink></span>
          <span><NavLink to="/children2">children2</NavLink></span>
          <span><NavLink to="/person/12/14">person</NavLink></span>
        </section>
        <hr />
        <section>
          <Switch>
            <Route
              exact
              path="/component"
              component={Component}
            />
            <Route
              exact
              path="/render"
              render={Render}
            />
            <Route
              exact
              path="/children1">
              {Children1}
            </Route>
            <Route
              exact
              path="/children2">
              {Children2}
            </Route>
            <Route
              exact
              path="/person/:personId/:peopleId">
              {Person}
            </Route>
            <Route
              exact>
              {NotDefined}
            </Route>
          </Switch>
        </section>
      </BrowserRouter>

      <style jsx>{`
        .nav {
          display: flex;
        }

        .nav > span {
          padding: 10px;
        }
      `}</style>
    </article>
  )
}

export default App
