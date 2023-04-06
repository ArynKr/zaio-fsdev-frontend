import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const RedirectToEnroll = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/enroll");
  });

  return (
    <div className="mt-10">
      <Link
        to="/enroll"
        className="text-white focus:ring-4 focus:outline-none bg-gradient-to-r from-blue-500 to-blue-600 font-medium rounded-lg text-sm w-full px-5 py-3.5 mt-1 mb-4 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all hover:shadow-lg"
      >
        Redirecting to enroll...
      </Link>
    </div>
  );
};

export default RedirectToEnroll;
