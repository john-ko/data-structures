interface smallestValueSturcture {
  value: number,
  reference: number
}
export default function matrixSum (matrix: number[][]) {
  const smallest: smallestValueSturcture[][] = []
  const answers: smallestValueSturcture[] = []

  matrix.forEach((row, rowIndex) => {
    smallest.push([])
    row.forEach((column, colIndex) => {
      const sumOfDigits = sumDigits(column)
      const smallestValueData = {
        value: sumOfDigits,
        reference: column
      }

      smallest[rowIndex][colIndex] = smallestValueData

      if (answers[colIndex] === undefined) {
        answers[colIndex] = smallestValueData
      } else if (answers[colIndex].value > smallestValueData.value) {
        answers[colIndex] = smallestValueData
      }
    })
  })

  return answers.map(data => {
    return data.reference
  })
}


export function sumDigits (num: number): number {
  const numberAsString = num.toString()
  let sum = 0
  
  for (let digit of numberAsString) {
    sum += Number(digit)
  }

  return sum
}