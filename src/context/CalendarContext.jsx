import { createContext } from "react";

const CalendarContext = createContext({
  monthIndex: 0,
  setMonthIndex: () => {},
  year: 0,
  setYear: () => {},
  showEventsModal: false,
  setShowEventsModal: () => {},
  modalTasks: [],
  setModalTasks: () => {},
});

export default CalendarContext;