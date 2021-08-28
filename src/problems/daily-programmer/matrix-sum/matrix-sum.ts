
export default function matrixSum (matrix: number[][]) {
  const smallest: number[] = []

  matrix.forEach((row, rowIndex) => {
    row.forEach((column, colIndex) => {
      if (smallest[colIndex] === undefined) {
        smallest[colIndex] = column
      } else if (smallest[colIndex] > column) {
        smallest[colIndex] = column
      }
    })
  })

  return smallest
}