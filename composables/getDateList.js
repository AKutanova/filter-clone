export default function getDateList() {
  const WEEK = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  let dateArray = []

  const now = new Date()
  
  let firstDay = new Date()
  firstDay.setDate(now.getDate() - 1)

  const delta = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  
  for (let i = 1; i <= delta; i++) {
    dateArray.push({
      day: firstDay.getDate(),
      weekDay: WEEK[firstDay.getDay()],
      month: MONTH[firstDay.getMonth()],
      ts: new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()).getTime()
    })

    firstDay.setDate(firstDay.getDate() + 1)
  }
  console.log(dateArray)
  return dateArray
}