// Complete the staircase function below.
function staircase(n = 0) {
  const lines = parseInt(n) || 0
  const staircase = []

  for (let i = 0; i < lines; i++) {
    string = ''

    // log spaces
    const spaces = lines - 1 - i
    for (let j = 0; j < spaces; j++) {
      string += ' '
    }

    for (let stairs = 0; stairs < i + 1; stairs++) {
      string += '#'
    }

    staircase.push(string)
  }
}

// console.log(staircase(3))