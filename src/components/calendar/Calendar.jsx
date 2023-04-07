import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CalendarContextWrapper from "../../context/CalendarContextWrapper";
import format from "../../utils/format";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import EventsModal from "./EventsModal";

const Calendar = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [courseStructure, setCourseStructure] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const hoursPerDay = localStorage.getItem("hoursPerDay");

    const fetchCourse = async () => {
      let data = await fetch(
        `${import.meta.env.VITE_BASE_URL}/courses`
      );
      data = await data.json();
      if(isMounted) {
        setCourse(data);
      }
    };

    const fetchCourseStructure = async () => {
      let data = await fetch(
        `${import.meta.env.VITE_BASE_URL}/courseStructures?hoursPerDay=${hoursPerDay}`
      );
      data = await data.json();
      if(isMounted) {
        const formattedData = format(data.structure);
        setCourseStructure(formattedData);
      }
    };    

    if (!hoursPerDay) {
      navigate("/enroll");
    } else {
      fetchCourse();
      fetchCourseStructure();
    }

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <CalendarContextWrapper>
      <div className="mb-12">
        <CalendarHeader />
        <Month course={course} courseStructure={courseStructure} />
      </div>
      <EventsModal />
    </CalendarContextWrapper>
  );
}

export default Calendar;