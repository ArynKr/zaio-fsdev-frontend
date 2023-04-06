import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import format from "../utils/format";

const Calendar = () => {
  const navigate = useNavigate();
  const [courseStructure, setCourseStructure] = useState(null);

  useEffect(() => {
    console.log(courseStructure)
  }, [courseStructure]);

  useEffect(() => {
    let isMounted = true;
    const hoursPerDay = localStorage.getItem("hoursPerDay");
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
      fetchCourseStructure();
    }

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div>Hello</div>
  );
}

export default Calendar;