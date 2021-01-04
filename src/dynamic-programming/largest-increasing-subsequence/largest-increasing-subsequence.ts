export function lis (numbers: number[]): number[][] {
  const lists: number[][] = []

  numbers.forEach(number => {
    if (lists.length === 0) {
      lists.push([number])
      return
    }

    for (let i = 0; i < lists.length; i++) {
      const group = lists[i]

      for (let j = group.length - 1; j > -1; j--) {
        const num = lists[i][j]

        if (number < num) {
          group.push(number)
          return
        }

        // skip this group and go one to the next one
        break
      }
    }

    lists.push([number])
  })

  return lists
}

// [4, 2, 5, 8, 1]
// [4]
// [1, 2]
export function lisRecursive(numbers: number[], current?: number): number {
  if (numbers.length < 0) {
    return 0
  }

  if (numbers.length === 1) {
    return 1
  }

  if (current === undefined) {
    current = numbers[0]
  }

  for (let num of numbers) {
    if (num > current) {

    }
  }


  return 0
}
