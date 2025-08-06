import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics:React.FC<{ good: number, neutral: number, bad: number }> = ({ 
    good, 
    neutral, 
    bad 
}) => {

  return (
    <div>
      <h1>statistics</h1>

      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : 
      (<table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good+neutral+bad} />
        <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)} />
        <StatisticLine text="positive" value={`${good*100/(good+neutral+bad)} %`} />
      </table>)}
    </div>
  )
}

export default Statistics
