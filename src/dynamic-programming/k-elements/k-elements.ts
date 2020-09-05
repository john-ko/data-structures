
export function kElements (numbers: number[], k: number): number {
  let i: number = 0
  let j: number = 1
  const length = numbers.length
  const target: number = length - k
  const pivot: number = Math.floor(length / 2)
  const pivotNumber = numbers[pivot]

  if (length === 1) {
    return numbers[0]
  }

  // move pivot to the end
  swap(numbers, pivot, length - 1)

  while(j < length - 1) {
    if (numbers[j] < pivotNumber) {
      // swap and advance i
      swap(numbers, i, j)
      i++
    }

    j++
  }

  // swap boundary
  if (numbers[i] > numbers[length - 1]) {
    swap(numbers, i, length - 1)
  }

  if (i === target) {
    return numbers[i]
  }

  const isSmaller = (i > target)

  let start = isSmaller ? 0: i + 1
  let finish = isSmaller ? i : numbers.length
  let t = figureOutK(numbers, i, k)

  return kElements(numbers.slice(start, finish), t)
}

export function figureOutK (numbers: number[], i: number, k: number): number {
  const target = numbers.length - k
  if (i < target) {
    return k
  }

  return Math.abs(target - i)
}

export function swap (arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
