export function stalin_sort (numbers: number[]): number[] {
  let previous: number = Number.NEGATIVE_INFINITY

  return numbers.reduce((acc: number[], num: number) => {
    if (num < previous) {
      send_to_gulag(num)

      return acc
    }

    acc.push(num)
    previous = num

    return acc
  }, [])
}

export function send_to_gulag(num: number) {
  num = 0 // dead
}
