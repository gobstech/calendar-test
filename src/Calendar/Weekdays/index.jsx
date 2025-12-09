import React from 'react'

const Weekdays = ({ weekdays }) => {
  return (
    <div id="weekdays">
      {weekdays.map((weekday, index) => {
        return <div key={index}>{weekday}</div>
      })}
    </div>
  )
}

export default Weekdays
