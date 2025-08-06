import React from 'react'
import Part from './Part';

const Content: React.FC<{parts: { name: string; exercises: number }[]}> = ({ parts }) => {


  return (
    <div>
      {
        parts.map((part, index) => (
          <Part key={index} part={part.name} excercises={part.exercises} />
        ))
      }
    </div>
  )
}

export default Content
