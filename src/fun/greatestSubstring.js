
export default function greatestSubstring (string1 = '', string2 = '') {
  let max = 0
  let current = 0
  const letterBooleans = []
  // create n x m matrix of booleans
  for (let i = 0; i < string1.length; i++) {
    letterBooleans.push(new Array(string2.length))

    for (let j = 0; j < string2.length; j++) {
      letterBooleans[i][j] = string1.charAt(i) === string2.charAt(j)
    }
  }

  // loop through matrix and checks booleans
  for (let i = 0; i < string1.length; i++) {
    current = 0
    for (let j = 0; j < string2.length; j++) {
      // if match check diagnol
      if (letterBooleans[i][j]) {
        current = checkDiagonal(letterBooleans, i, j)

        if (current > max) {
          max = current
          // reset current
          current = 0
        }
      }
    }
  }

  return max
}

export function checkDiagonal (array, i, j) {
  let count = 0

  while (array[i] && array[i][j]) {
    count++
    i++
    j++
  }

  return count
}