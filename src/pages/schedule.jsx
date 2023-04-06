import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";

const Schedule = () => {

  return (
    <div className="w-full max-w-md mx-auto border px-4 py-8 rounded-xl mt-24">
      <Calendar />
    </div>
  );
};

export default Schedule;
