import React from 'react'

interface Props {
  name: string;
  age: number;
}

const Cat = (props: Props) => {
  return (
    <article>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </article>
  )
}

export default Cat
