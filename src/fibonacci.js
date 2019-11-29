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

const memoizationMap = new Map()
memoizationMap.set(0, 1)
memoizationMap.set(1, 1)

export function fibonacciMemoization (n) {
  if (n <= 0) {
    return 0
  }

  for (let i = 0; i < n; i++) {

  }

  // if (memoizationMap.get(n))
  // return 0
}