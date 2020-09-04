export function editDistance (str1: string, str2: string): number {
  const matrix: number[][] = []

  for (let i = 0; i < str1.length + 1; i++) {
    matrix.push([])
    for (let j = 0; j < str2.length + 1; j++) {
      matrix[i].push(j + i)
    }
  }

  // traverse the matrix
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      let char1 = str1[i - 1]
      let char2 = str2[j - 1]
      let value = matrix[i - 1][j - 1]

      if (char1 !== char2) {
        value = findMin(matrix, i, j) + 1
      }

      matrix[i][j] = value
    }
  }

  return matrix[str1.length][str2.length]
}

export function findMin (matrix: number[][], i: number, j: number): number {
  let min = matrix[i - 1][j - 1]

  if (matrix[i - 1][j] < min) {
    min = matrix[i - 1][j]
  }

  if (matrix[i][j - 1] < min) {
    min = matrix[i][j - 1]
  }

  return min
}