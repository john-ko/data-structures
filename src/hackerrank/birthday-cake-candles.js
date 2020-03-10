function birthdayCakeCandles(ar) {
  if (!ar.length) {
    return 0
  }

  const hashMap = {}
  let max = ar[0]

  ar.forEach((number) => {
    if (max < number) {
      max = number
    }

    if (hashMap[number]) {
      hashMap[number] += 1
    } else {
      hashMap[number] = 1
    }
  })

  return hashMap[max]
}