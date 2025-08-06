import React from 'react'

const StatisticLine:React.FC<{ text: string; value: number|string }> = ({ text, value }) => {
  return (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
  )
}

export default StatisticLine
