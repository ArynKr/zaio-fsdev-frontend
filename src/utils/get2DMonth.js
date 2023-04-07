import dayjs from 'dayjs'

const get2DMonth = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentDay = 0 - firstDayOfMonth;
  
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentDay++;
      return dayjs(new Date(year, month, currentDay));
    })
  })
  return daysMatrix;
}

export default get2DMonth;