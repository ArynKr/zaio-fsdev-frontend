import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const RedirectToEnroll = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 w-full flex justify-center">
      <Link
        to="/enroll"
        className="text-white mx-auto focus:ring-4 w-44 focus:outline-none bg-gradient-to-r from-blue-500 to-blue-600 font-medium rounded-lg text-sm  px-5 py-3.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all hover:shadow-lg"
      >
        Go to Enroll
      </Link>
    </div>
  );
};

export default RedirectToEnroll;
