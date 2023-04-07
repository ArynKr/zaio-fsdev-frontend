import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "./Select";
import { courseOptions, hoursPerDayOptions } from "../constants";

const EnrollForm = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [courseError, setCourseError] = useState(false);
  const [hoursError, setHoursError] = useState(false);

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!course) {
      setCourseError(true);
    } else {
      setCourseError(false);
    }
    if (!hoursPerDay) {
      setHoursError(true);
    } else {
      setHoursError(false);
    }
    if (course && hoursPerDay) {
      localStorage.setItem("hoursPerDay", hoursPerDay);
      navigate("/schedule");
    }
  };

  return (
    <form onSubmit={handleEnroll}>
      <h1 className="text-center text-2xl mb-10 font-semibold sm:whitespace-nowrap bg-gradient-to-r from-indigo-500 to-indigo-900 bg-clip-text text-transparent">
        Enroll in a course
      </h1>

      <div className="mb-8">
        <Select
          initial="Select a course"
          label="Course"
          options={courseOptions}
          data={course}
          setData={setCourse}
        />
        {/* Error Text */}
        {courseError && (
          <p className="text-red-500 text-sm mt-1">Please select a course</p>
        )}
      </div>

      <div className="mb-8">
        <Select
          initial="Select hours per day"
          label="Hours per day"
          options={hoursPerDayOptions}
          data={hoursPerDay}
          setData={setHoursPerDay}
        />
        {/* Error Text */}
        {hoursError && (
          <p className="text-red-500 text-sm mt-1">
            Please select hours per day
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none bg-gradient-to-r from-blue-500 to-blue-600 font-medium rounded-lg text-sm w-full px-5 py-3.5 mt-1 mb-4 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all hover:shadow-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default EnrollForm;
