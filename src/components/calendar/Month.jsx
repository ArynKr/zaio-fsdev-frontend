import get2DMonth from '../../utils/get2DMonth'
import CalendarContext from '../../context/CalendarContext'
import React, { useContext } from 'react'
import Day from './Day'

const Month = ({ course, courseStructure }) => {
  const { monthIndex } = useContext(CalendarContext)
  const month = get2DMonth(monthIndex)

  return (
    <div className='flex-1 grid grid-cols-7 '>
      {month.map((week, weekIndex) => (
        <React.Fragment key={weekIndex}>
          {week.map((day, dayIndex) => (
            <Day
              key={dayIndex}
              day={day}
              course={course}
              dayStructure={courseStructure?.[day.format('YYYY-MM-DD')]}
              showWeekday={weekIndex === 0}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Month
