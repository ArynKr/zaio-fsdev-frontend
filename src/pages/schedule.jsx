import { useEffect, useState } from "react";

const Schedule = () => {
  const [courseStructure, setCourseStructure] = useState(null);
  useEffect(() => {
    const hoursPerDay = localStorage.getItem("hoursPerDay");
    const fetchCourseStructure = async () => {
      const data = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/courseStructures?hoursPerDay=${hoursPerDay}`
      );
      console.log(data);
    };
    if (!hoursPerDay) {
      navigate("/enroll");
    } else {
      fetchCourseStructure();
    }
  });

  return null;
};

export default Schedule;
