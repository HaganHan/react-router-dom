import React from 'react'

import { BaseProps } from '~src/interface/common'

const Person = (props: BaseProps): JSX.Element => {
  console.log(props)
  return (
    <article>
      Person
    </article>
  )
}

export default Person
