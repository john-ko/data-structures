function miniMaxSum (arr) {
  const sum = arr.reduce((a,b) => a + b, 0)
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const smallestSum = sum - max
  const largestSum = sum - min

  return [smallestSum, largestSum]
}

function miniMaxSumEff (numbers) {
  let sum = 0
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY

  numbers.forEach((number) => {
    sum += number

    if (number > max) {
      max = number
    }

    if (number < min) {
      min = number
    }
  })

  return [sum - max, sum - min]
}
