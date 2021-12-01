/**
 * Rod cutting problem
 * 
 * Input:
 * 
 * length[] = [1, 2, 3, 4, 5, 6, 7, 8]
 * price [] = [1, 5, 8, 9, 10, 17, 17, 20]
 *  
 * Rod length: 4
 *  
 *  
 * Best: Cut the rod into two pieces of length 2 each to gain revenue of 5 + 5 = 10
 */

export function rodCutting (length: number[], prices: number[]): number {
  return 4
}

export function rodCuttingRecursive(prices: number[], maxLength: number): number {
  if (maxLength === 1) {
    return prices[0]
  }
  
  let max = 0

  for (let i = 0; i < maxLength; i++) {
    const number = rodCuttingRecursive(prices, maxLength - (i + 1)) + prices[i]
    if (number > max) {
      max = number
    }
  }

  return max
}
