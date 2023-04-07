import ModalWrapper from "../ModalWrapper"
import CalendarContext from "../../context/CalendarContext"
import { useContext } from "react"
import { CircleIcon, Cross1Icon } from "@radix-ui/react-icons"

const EventsModal = () => {
  const { showEventsModal, setShowEventsModal, modalTasks } = useContext(CalendarContext)

  const handleCloseModal = () => {
    document.body.style.overflow = 'auto'
    setShowEventsModal(false)
  }

  if (!showEventsModal) {
    return null
  }

  return (
    <ModalWrapper>
      <div className="bg-white rounded-lg shadow-lg px-8 py-6 w-full max-w-xl">
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-medium">All Events</h1>
          <button onClick={handleCloseModal} className="">
            <Cross1Icon />
          </button>
        </header>
        <div className="flex flex-col gap-4 max-h-80 overflow-y-auto scrollbar-hide">
        {
          modalTasks.map((task) => (
            <div key={task._id} className="flex items-center gap-2 cursor-pointer">
              <span className="w-4 scale-110">
                <CircleIcon />
              </span>
              <p className="text-sm">{task.title}</p>
            </div>
          ))
        }
        </div>
      </div>
    </ModalWrapper>

  )
}

export default EventsModal