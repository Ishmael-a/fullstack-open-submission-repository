import React from 'react'

const Part: React.FC<{ part: string; excercises: number | string }> = (props) => {
  return (
    <p>
        {props.part} {props.excercises}
    </p>
  )
}

export default Part
