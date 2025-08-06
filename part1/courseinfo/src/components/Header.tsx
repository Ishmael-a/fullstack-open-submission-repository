import React from 'react'

const Header: React.FC<{ course: string  }> = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

export default Header
