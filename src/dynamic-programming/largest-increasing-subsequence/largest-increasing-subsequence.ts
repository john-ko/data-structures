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
