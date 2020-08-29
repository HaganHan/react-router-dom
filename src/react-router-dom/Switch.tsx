import React, { useContext, ReactNode, ReactElement } from 'react'

import { BaseProps, Location } from '~src/interface/common'
import { ContextBrowserRouter } from '~src/react-router-dom/context'
import matchPath from '~src/react-router-dom/matchPath'

interface Props extends BaseProps {
  location?: Location;
}

const Switch = (props: Props): JSX.Element | null => {
  const contextBrowserRouter = useContext(ContextBrowserRouter)
  const location = props.location || contextBrowserRouter.location
  let element: ReactNode
  let match: object | null = null
  React.Children.forEach(props.children, child => {
    if (match === null && React.isValidElement(child)) {
      element = child
      const path = child.props.path || child.props.from
      const { exact, strict, sensitive } = child.props
      match = path
        ? matchPath(location.pathname, { path, exact, strict, sensitive })
        : contextBrowserRouter.match
    }
  })

  return match
    ? React.cloneElement(element as ReactElement, { location, computedMatch: match })
    : null
}

export default Switch
