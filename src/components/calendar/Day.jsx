import dayjs from "dayjs";

const Day = ({ day, showWeekday }) => {

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "border-blue-400 border-2"
      : "border-gray-200 border";
  }

  // TODO: Use day.month() to check if date is not in current month the style it differently
  // Also style weekends differently
  return (
    <div className={`flex flex-col ${getCurrentDayClass()}`}>
      <header className='flex flex-col items-center'>
        {showWeekday && (
          <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>
        )}
        <p className='text-sm p-1 my-1 text-center'>{day.format('DD')}</p>
      </header>
    </div>
  )
}

export default Day
