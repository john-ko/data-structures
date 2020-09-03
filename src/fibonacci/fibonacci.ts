
export function fibonacci (num: number): number {
  return 0
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
  const index: number = num - 1
  if (memoized[index]) {
    return memoized[index]
  }

  // work up until that num
  while(num >= memoized.length) {
    const i = memoized.length
    const number = memoized[i - 1] + memoized[i - 2]
    memoized.push(number)
  }

  return memoized[memoized.length - 1]
}