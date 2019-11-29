// golden ratio phi 1.618033988749895 (truncated)
const ф = 1.61803398874989484820458683436563811
// square root 5    2.23606797749979 (truncated)
const sqrt5 = 2.2360679774997896964091736687312762

export default function fibonacci (n = 1) {
  return Math.round(Math.pow(ф, n) / sqrt5)
}

export function fibonacciRecursive (n) {
  if (n < 1) {
    return 0
  }

  if (n <= 2) {
    return 1
  }

  return fibonacciRecursive(n - 1)
    + fibonacciRecursive(n - 2)
}

const memozationArray = [0, 1, 1]
export function fibonacciMemoization (n = 0) {
  if (n <= 0) { return 0 }

  if (memozationArray[n]) {
    return memozationArray[n]
  }

  const arrayDistance = n - memozationArray.length

  for (let i = arrayDistance; i < n; i++) {
    memozationArray[n] = memozationArray[n - 1]
      + memozationArray[n - 2]
  }

  return memozationArray[n]
}

export function fibonacciIterative (n) {
  if (n <= 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  let sum = 0
  let nMinus1 = 0
  let nMinus2 = 1

  for (let i = 1; i < n; i++) {
    sum = nMinus1 + nMinus2

    nMinus1 = nMinus2
    nMinus2 = sum
  }

  return sum
}
