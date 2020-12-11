export default function canSum (target: number, numbers: number[]): boolean {
  if (target === 0) {
    return true
  }

  if (target < 0) {
    return false
  }

  for (let num of numbers) {
    const remainder = target - num

    if (canSum(remainder, numbers)) {
      return true
    }
  }

  return false
}
