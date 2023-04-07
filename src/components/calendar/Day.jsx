import dayjs from 'dayjs'
import Lessons from './Lessons'
import { useContext, useMemo } from 'react'
import CalendarContext from '../../context/CalendarContext'

const Day = ({ day, showWeekday, course, dayStructure }) => {
  const { monthIndex } = useContext(CalendarContext)
  /* get lessons for current day */
  const lessons = useMemo(() => {
    return dayStructure
      ? course?.slice(
          dayStructure?.startIdx,
          dayStructure?.startIdx + dayStructure?.noOfLessons
        )
      : null
  }, [course, dayStructure?.startIdx, dayStructure?.noOfLessons])

  /* styling for current day */
  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'border-blue-400 border-2'
      : 'border-gray-200 border'
  }

  /* styling for other month dates */
  const getCurrentMonthClass = () => {
    return day.month() === (monthIndex % 12)  ? '' : 'opacity-50'
  }

  /* styling for weekends */
  const getWeekendClass = () => {
    return day.day() === 0 || day.day() === 6 ? 'bg-gray-100 text-blue-800' : ''
  }


  // TODO: Use day.month() to check if date is not in current month the style it differently
  // Also style weekends differently
  return (
    <div className={`flex flex-col min-h-[150px] h-auto ${getCurrentDayClass()} ${getWeekendClass()}`}>
      <header className='flex flex-col items-center mb-8 select-none'>
        {showWeekday && (
          <p className='text-md font-medium mt-1 mb-2 '>{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 flex items-center justify-center border border-gray-300 rounded-full w-8 h-8 font-medium ${getCurrentMonthClass()}`}>{day.format('DD')}</p>
      </header>
      {lessons && (
        <div className={`h-full ${getCurrentMonthClass()}`}>
          <Lessons lessons={lessons} />
        </div>
      )}
    </div>
  )
}

export default Day
