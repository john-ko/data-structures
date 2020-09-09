// golden ratio phi 1.618033988749895 (truncated)
const ф = 1.61803398874989484820458683436563811
// square root 5    2.23606797749979 (truncated)
const sqrt5 = 2.2360679774997896964091736687312762


export function fibonacci (n: number): number {
  return Math.round(Math.pow(ф, n) / sqrt5)
}

/**
 * recursive way for fib sequence
 * @param num {number} - the nth element in the sequence
 */
export function fibonacciRecursive (num: number): number {
  if (num === 1) {
    return 0
  }

  if (num === 2) {
    return 1
  }

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
}


let memoized = [0, 1]

/**
 * memoized version of fib sequence
 * @param num {number}
 */
export function fibonacciMemoize (num: number): number {
  if (memoized[num] !== undefined) {
    return memoized[num]
  }

  // work up until that num
  while(num >= memoized.length) {
    const i = memoized.length
    const number = memoized[i - 1] + memoized[i - 2]
    memoized.push(number)
  }

  return memoized[memoized.length - 1]
}