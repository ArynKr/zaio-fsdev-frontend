import { useContext } from 'react'
import dayjs from 'dayjs'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CounterClockwiseClockIcon,
} from '@radix-ui/react-icons'
import CalendarContext from '../../context/CalendarContext'

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex, year } = useContext(CalendarContext)
  const tempDate = dayjs(new Date(year, monthIndex))

  const handlePrevMonth = () => {
    setMonthIndex((prevMonthIndex) => prevMonthIndex - 1)
  }

  const handleNextMonth = () => {
    setMonthIndex((prevMonthIndex) => prevMonthIndex + 1)
  }

  const handleMonthReset = () => {
    setMonthIndex(dayjs().month())
  }

  return (
    <div className='flex h-20 justify-between items-center'>
      <p>Hello, User</p>
      <div className='px-4 py-2 flex gap-2'>
        <button onClick={handlePrevMonth} className='scale-150'>
          <ChevronLeftIcon />
        </button>
        <h1 className='text-2xl font-semibold w-64 text-center'>
          {tempDate.format('MMMM YYYY')}
        </h1>
        <button onClick={handleNextMonth} className='scale-150'>
          <ChevronRightIcon />
        </button>
      </div>
      <button onClick={handleMonthReset} className='px-4 py-2 border-2 border-gray-300 rounded hover:border-blue-400 flex gap-2 items-center'>
        <span>
          {' '}
          <CounterClockwiseClockIcon />{' '}
        </span>
        <span>Today</span>
      </button>
    </div>
  )
}

export default CalendarHeader
