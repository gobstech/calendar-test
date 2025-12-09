import React, { useState } from 'react'

const DatesContainer = ({calendarDays}) => {
  const [clicked, setClicked] = useState(null);
  
  const dayClicked = (dayNumber) => {
    alert(dayNumber);
  }
  
  return (
    <div id="calendar">
      {calendarDays && calendarDays.map((day, index) => {
        return <div className={day.isPadding ? "padding" : "day"} key={index} onClick={() => dayClicked(day.dayNumber)} >{day.dayNumber}</div>
      })}
    </div>
  )
}

export default DatesContainer
