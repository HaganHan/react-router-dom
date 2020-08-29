import React, { ReactNode, useContext, createElement, FunctionComponent } from 'react'

import { BaseProps, Location, ContextBrowserRouterInterface, Match } from '~src/interface/common'
import { ContextBrowserRouter } from '~src/react-router-dom/context'
import matchPath from '~src/react-router-dom/matchPath'

interface Props extends BaseProps {
  exact?: boolean;
  path?: string;
  component?: FunctionComponent;
  render?: (props: ContextBrowserRouterInterface) => {};
  children?: ReactNode;
  location?: Location;
  strict?: boolean;
  sensitive?: boolean;
  computedMatch?: Match;
}

const Route = (props: Props): JSX.Element => {
  const { exact, path, component, render, children, strict, sensitive, computedMatch } = props

  const contextBrowserRouter = useContext(ContextBrowserRouter)
  const Provider = ContextBrowserRouter.Provider
  const history = contextBrowserRouter.history
  const location = props.location || contextBrowserRouter.location
  const match = computedMatch || (path
    ? (matchPath(location.pathname, { path, exact, strict, sensitive }))
    : contextBrowserRouter.match)

  const newProps = { history, location, match }

  return (
    <Provider value={{ history, location, match }}>
      {
        match
          ? children
            ? typeof children === 'function'
              ? children(newProps)
              : children
            : component
              ? createElement(component, { ...newProps, key: `${Date.now()}${Math.random()}` })
              : render
                ? render(newProps)
                : null
          : typeof children === 'function'
            ? children(newProps)
            : null
      }
    </Provider>
  )
}

export default Route
