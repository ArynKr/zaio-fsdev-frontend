import { useState } from 'react'
import dayjs from 'dayjs'
import CalendarContext from './CalendarContext'

const CalendarContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [year, setYear] = useState(dayjs().year())
  const [showEventsModal, setShowEventsModal] = useState(false)
  const [modalTasks, setModalTasks] = useState([])

  return (
    <CalendarContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        year,
        setYear,
        showEventsModal,
        setShowEventsModal,
        modalTasks,
        setModalTasks,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarContextWrapper
