export default function getDateList() {
  const WEEK = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  const MONTH = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  let dateArray = []

  const now = new Date()
  
  // получаем предыдущий день от текущей даты
  const firstDay = new Date()
  firstDay.setDate(now.getDate() - 1)

  // получаем количество дней в месяце
  const delta = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  
  // формируем массив дат
  for (let i = 1; i <= delta; i++) {
    dateArray.push({
      day: firstDay.getDate(),
      weekDay: WEEK[firstDay.getDay()],
      month: MONTH[firstDay.getMonth()],
      ts: new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()).getTime()
    })

    firstDay.setDate(firstDay.getDate() + 1)
  }

  return dateArray
}