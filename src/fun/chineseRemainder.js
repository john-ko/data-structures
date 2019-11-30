/*
  Input:  num[] = {5, 7}, rem[] = {1, 3}
  Output: 31
  Explanation:
  31 is the smallest number such that:
    (1) When we divide it by 5, we get remainder 1.
    (2) When we divide it by 7, we get remainder 3.
*/
export default function chineseRemainder (numbers = [], remainders = []) {
  if (!numbers.length || !remainders.length) {
    return 0
  }

  // stop after 100 iterations to prevent infinite loops
  const stopAt = 100
  let target = 0
  let iteration = 0

  const [
    largest,
    largestNumberRemainder
  ] = findLargestNumberAndItsRemainder(numbers, remainders)

  while (iteration < stopAt) {
    target = (largest * iteration) + largestNumberRemainder

    // if all multiples are found return the target
    if (findAllRemainders(numbers, remainders, target)) {
      return target
    }

    // else continue and increment multiple
    iteration++
  }

  // not found after [stopAt] max iterations
  return 0
}

/**
 * findLargestNumberAndItsRemainder
 * finds the largest number and its associated remainder
 * by index
 *
 * @export
 * @param {Array<Number>} numbers
 * @param {Array<Number>} remainders
 * @returns Array<Number>
 */
export function findLargestNumberAndItsRemainder (numbers, remainders) {
  let maxNumber = numbers[0]
  let maxNumberReminader = remainders[0]

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const remainder = remainders[i]

    if (number > maxNumber) {
      // set max and max numbers remainder
      maxNumber = number
      maxNumberReminader = remainder
    }
  }

  return [maxNumber, maxNumberReminader]
}

/**
 * findAllRemainders
 * loops through numbers and associated remainders
 * and checks against the target number
 * returns true if all pass else false
 *
 * @export
 * @param {Array<Number>} numbers
 * @param {Array<Number>} remainders
 * @param {Number} target
 * @returns Boolean
 */
export function findAllRemainders (numbers, remainders, target) {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const remainder = remainders[i]

    if (target % number !== remainder) {
      return false
    }
  }

  return true
}
