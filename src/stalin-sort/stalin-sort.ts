export function stalin_sort (numbers: number[]): number[] {
  let previous: number = Number.NEGATIVE_INFINITY

  // return sorted
  return numbers.reduce((acc: number[], num: number) => {
    if (num >= previous) {
      acc.push(num)
      previous = num
    }

    // else send_to_gulag

    return acc
  }, [])
}

export function send_to_gulag(num: number) {
  const gulag = { num }

  // dead
  // @ts-ignore
  delete gulag['num']
}
