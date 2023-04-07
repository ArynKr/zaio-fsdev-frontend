import get2DMonth from "../../utils/get2DMonth";
import CalendarContext from "../../context/CalendarContext";
import React, { useContext } from "react";
import Day from "./Day";

const Month = () => {
  const { monthIndex } = useContext(CalendarContext);
  const month = get2DMonth(monthIndex);
  
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((week, weekIndex) => (
        <React.Fragment key={weekIndex}>
          {week.map((day, dayIndex) => (
            <Day key={dayIndex} day={day} showWeekday={weekIndex === 0} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month;