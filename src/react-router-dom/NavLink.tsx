import React, { useContext, BaseSyntheticEvent } from 'react'

import { BaseProps } from '~src/interface/common'
import { ContextBrowserRouter } from '~router/context'

interface Props extends BaseProps {
  to: string;
}

const NavLink = (props: Props): JSX.Element => {
  const contextBrowserRouter = useContext(ContextBrowserRouter)
  const { history } = contextBrowserRouter
  console.log(history)

  function onClick (event: BaseSyntheticEvent): void {
    event.preventDefault()
    history.push(props.to)
  }

  return (
    <a
      href={props.to}
      onClick={onClick}>
      {props.children}
    </a>
  )
}

export default NavLink
