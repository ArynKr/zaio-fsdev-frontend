import dayjs from "dayjs";

const isWeekend = (date) => {
  const day = date.getDay();
  // console.log(date, day)
  return day === 0 || day === 6;
};

const format = (structure) => {
  const currDate = new Date();
  const formattedData = new Map();
  let currIdx = 0;
  structure.forEach((item) => {
    do {
      currDate.setDate(currDate.getDate() + 1);
    } while (isWeekend(currDate));
    console.log(currDate, dayjs(currDate).format('YYYY-MM-DD'));
    formattedData.set(dayjs(currDate).format('YYYY-MM-DD'), {...item, startIdx: currIdx});
    // console.log(formattedData)
    currIdx += item.noOfLessons;
  });
  return Object.fromEntries(formattedData);
}

export default format;