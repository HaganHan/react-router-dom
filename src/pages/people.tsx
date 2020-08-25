import React from 'react'

interface PeopleProps {
  name: string;
  age: number;
}

const People = (props: PeopleProps) => {
  return (
    <article>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </article>
  )
}

export default People
