export function largestSubstring (a: string, b: string): string[] {
  const matrix: boolean[][] = []
  let current: string[] = []
  let max: string[] = []

  for (let i = 0; i < a.length; i++) {
    matrix.push([])

    for (let j = 0; j < b.length; j++) {
      matrix[i].push(a[i] === b[j])
    }
  }

  // now walk along the matrix
  for (let i = 0; i < a.length; i++) {
    current = []
    for (let j = 0; j < b.length; j++) {
      // if match check diagonal
      if (matrix[i][j]) {
        current = checkDiagonal(matrix, i, j, a)
        // current = maxSubstring.length

        if (current.length > max.length) {
          max = current
          current = []
        }
      }
    }
  }

  return max
}

export function checkDiagonal (array: boolean[][], i: number, j: number, str: string): string[] {
  const letters = []

  while (array[i] && array[i][j]) {
    letters.push(str[i])
    i++
    j++
  }

  return letters
}

export function largestSubstringV2 (a: string, b: string) {
  const matrix: number[][] = []
  const max = {
    size: 0,
    pos: {
      i: 0,
      j: 0,
    }
  }

  for (let i = 0; i < a.length; i++) {
    let subMatrix: number[] = []
    for (let j = 0; j < b.length; j++) {
      let additional = 0
      if (a[i] === b[j]) {
        additional = (matrix[i - 1]?.[j - 1] ?? 0) + 1
      }
      subMatrix[j] = additional

      // max check
      if (subMatrix[j] > max.size) {
        max.size = subMatrix[j]
        max.pos.i = i
        max.pos.j = j
      }
    }
    matrix.push(subMatrix)
  }

  return max
}