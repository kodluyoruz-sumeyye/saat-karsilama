const userName = prompt('Hello, please tell me your name?').toUpperCase()
const headingName = document.getElementById('name');
headingName.innerText = `NICE TO MEET YOU, ${userName}`
const date = new Date()
const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
const day = `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : `${date.getDate()}`
const month = `${date.getMonth()}`.length === 1 ? `0${date.getMonth()}` : `${date.getMonth()}`
const headingDate = document.getElementById('date');
headingDate.innerText = `${day}.${month}.${date.getFullYear() + 1000}, ${days[date.getDay()]}`
const headingTime = document.getElementById('time')
headingTime.innerText = `${date.toLocaleTimeString()}`