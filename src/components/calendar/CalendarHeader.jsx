import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CounterClockwiseClockIcon,
  ExitIcon,
} from '@radix-ui/react-icons'
import CalendarContext from '../../context/CalendarContext'

const CalendarHeader = () => {
  const navigate = useNavigate()
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

  const handleExit = () => {
    localStorage.removeItem('hoursPerDay')
    navigate('/enroll')
  }

  return (
    <div className='flex h-24 mt-2 justify-between items-center'>
      <p className='text-lg'>Hello, User 👋</p>
      <div className='px-4 py-2 flex gap-2'>
        <button onClick={handlePrevMonth} className='scale-150 hover:scale-[1.75] transition-all'>
          <ChevronLeftIcon />
        </button>
        <h1 className='text-2xl font-medium w-64 flex items-center justify-center gap-4'>
          <span className='scale-150 w-4'><CalendarIcon /></span>
          {tempDate.format('MMMM YYYY')}
        </h1>
        <button onClick={handleNextMonth} className='scale-150 hover:scale-[1.75] transition-all'>
          <ChevronRightIcon />
        </button>
      </div>
      <div className='flex gap-2'>
        <button onClick={handleMonthReset} className='px-4 py-2 border-2 border-gray-300 rounded hover:border-blue-400 flex gap-2 items-center'>
          <span>
            {' '}
            <CounterClockwiseClockIcon />{' '}
          </span>
          <span>Today</span>
        </button>
        <button className='border-2 border-gray-300 rounded hover:border-blue-400 p-2' onClick={handleExit}>
          <ExitIcon />
        </button>
      </div>
    </div>
  )
}

export default CalendarHeader
