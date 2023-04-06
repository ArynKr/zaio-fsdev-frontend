const isWeekend = (date) => {
  const day = date.getDay();
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
    formattedData.set(currDate.toISOString().slice(0, 10), {...item, startIdx: currIdx});
    currIdx += item.noOfLessons;
  });
  return Object.fromEntries(formattedData);
}

export default format;