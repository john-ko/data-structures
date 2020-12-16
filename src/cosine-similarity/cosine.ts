export default function cosineSimilarity(x: number[], y: number[]): number {
  const numerator = sum(x, y)
  const denominator = Math.sqrt(squareSum(x)) * Math.sqrt(squareSum(y))
  return numerator / denominator
}

function sum (numbersX: number[], numbersY: number[]): number {
  const length = numbersX.length

  return numbersX.reduce((sum, num, index) => {
    return sum + (numbersX[index] * numbersY[index])
  }, 0)
}

function squareSum(numbers: number[]): number {
  return sum(numbers, numbers)
}
