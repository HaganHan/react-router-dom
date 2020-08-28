import React, { ReactNode } from 'react'

import { BaseProps } from '~src/interface/common'

interface Props extends BaseProps {
  exact?: boolean;
  path: string;
  component: ReactNode;
}

const Route = (props: Props): JSX.Element => {
  return (
    <article>Route</article>
  )
}

export default Route
