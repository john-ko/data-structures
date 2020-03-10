// 12:00:00AM input
function timeConversion (s) {
  const time = s.split(':')
  const hour = parseInt(time[0])
  const min = time[1]
  const sec = time[2].slice(0, 2)
  const noon = time[2].slice(2,4)

  let militaryHour = 0

  if (noon === 'PM' && hour !== 12) {
    militaryHour = 12
  } else if (noon === 'AM' && hour === 12) {
    militaryHour = -12
  }
  
  militaryHour += hour

  return `${militaryHour.toString().padStart(2, 0)}:${min}:${sec}`
}

console.log(timeConversion('01:01:02PM'))