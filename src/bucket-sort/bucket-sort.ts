export default function bucket_sort (numbers: number[]) {
  if (numbers.length === 0) {
    return []
  }

  const max = find_max(numbers)
  const max_length = get_number_length(max)

  let rounds = 1
  let nums = [...numbers]

  while (rounds <= max_length) {
    let buckets = get_clean_bucket()
    for (let num of nums) {
      const place = get_10s_place(rounds)
      const index = get_n_place_digit(num, place)

      buckets[index].push(num)
    }

    // clear nums
    nums = []

    // move them back into nums
    for (const bucket of buckets) {
      for (const bucket_number of bucket) {
        nums.push(bucket_number)
      }
    }

    rounds++
  }

  return nums
}

export function find_max (numbers: number[]): number {
  return Math.max(...numbers)
}

export function get_number_length (num: number) {
  return num.toString().length
}

export function get_n_place_digit (number: number, place: number) {
  return Math.floor(number/place) % 10
}

export function get_10s_place (rounds: number): number {
  return Math.pow(10, rounds - 1)
}

export function get_clean_bucket (): number[][] {
  return [
    [], // 0
    [], // 1
    [], // 2
    [], // 3
    [], // 4
    [], // 5
    [], // 6
    [], // 7
    [], // 8
    [], // 9
  ]
}
