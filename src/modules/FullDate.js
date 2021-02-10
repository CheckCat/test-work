export const FullDate = ({ day, month, year }) => {
  const classNames = ['date'];
  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`
  const date = document.createElement('p')
  date.textContent = `${day}.${month}.${year}`
  classNames.forEach(item => date.classList.add(item))
  return date
}