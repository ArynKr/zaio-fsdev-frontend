import { CircleIcon } from '@radix-ui/react-icons'
import { useContext, useMemo } from 'react'
import CalendarContext from '../../context/CalendarContext'

const Lessons = ({ lessons }) => {
  const { setShowEventsModal, setModalTasks } = useContext(CalendarContext)
  const renderedLessons = useMemo(() => {
    return lessons?.slice(0, Math.min(4, lessons?.length))
  })

  const handleShowModal = () => {
    // stop scrolling in body
    document.body.style.overflow = 'hidden'
    setModalTasks(lessons)
    setShowEventsModal(true)
  }

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col px-1'>
        {renderedLessons?.map((lesson) => (
          <div key={lesson._id} className='flex items-center h-7 select-none cursor-pointer'>
            <span className='w-4'>
              <CircleIcon />
            </span>
            <span className='text-sm font-medium p-1 my-1 whitespace-nowrap overflow-hidden overflow-ellipsis pr-2 hover:text-blue-700 transition-all'>
              {lesson.title}
            </span>
          </div>
        ))}
      </div>
      {lessons?.length > 4 && (
        <button onClick={handleShowModal} className='text-sm w-fit text-blue-800 py-2 pl-1 select-none'>
          + {lessons?.length - 4} tasks
        </button>
      )}
    </div>
  )
}

export default Lessons
