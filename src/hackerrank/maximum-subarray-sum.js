function maximumSum(arrayOfNumbers, modulus) {
  // const modulusArray = Array(modulus).fill(0)
  let maxModulus = 0
  const sumArray = arr => arr.reduce((a,b) => a + b, 0)

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const size = i + 1 // sub array size
    let start = 0

    for (let j = i; j < 3; j++) {
      const arrayToSum = arrayOfNumbers.slice(start, start + size)
      const sum = sumArray(arrayToSum)
      const mod = sum % modulus

      if (mod > maxModulus) {
        maxModulus = mod
      }

      start++
    }
  }

  return maxModulus
}
