interface mergeSortOptions {
  compare?: (a: any, b: any) => number
}

export default class MergeSort {
  compare: (a: any, b: any) => number
  constructor (options?: mergeSortOptions) {
    this.compare = options?.compare ?? MergeSort.defaultCompare
  }

  static defaultCompare (a: number | undefined, b: number | undefined): number {
    if (a === undefined && b !== undefined) {
      return 1
    }

    if (a !== undefined && b === undefined) {
      return -1
    }

    if (a < b) {
      return -1
    }

    if (b < a) {
      return 1
    }

    return 0
  }

  // wip
  // index  0 1 2 3
  // array [1,2,3,4]
  //
  // index  0 1 2 3 4
  // array [1,2,3,4,5]
  inPlaceSort (array: any[]): any[] {
    const start = 0
    const end = array.length
    const middle = Math.floor(end / 2)

    return this.merge(array, start, middle, end)
  }

  merge (array: any[], start: number, middle: number, end: number): any[] {
    if (start === middle) {
      return array[start]
    }

    if (middle === end) {
      return array[middle]
    }

    const lowerHalf = Math.floor((middle - start) / 2)

    const upperHalf = Math.floor((end - middle) / 2)

    // const startIndex = this.merge(array, start, lowerHalf, middle)
    // const endIndex = this.merge(array, middle + 1, upperHalf + 1, end)

    return array
  }

  mergeSort (array: any[]): any[] {
    const length: number = array.length

    if (length <= 1) {
      return array
    }

    // find middle
    const middle = Math.floor(length / 2)

    // split up the array
    const left = this.mergeSort(array.slice(0, middle))
    const right = this.mergeSort(array.slice(middle, length))

    // sort left and right
    let i: number = 0
    let j: number = 0
    const sorted: any[] = []

    while (i < left.length || j < right.length) {
      const compare = this.compare(left[i], right[j])

      if (compare === 1) {
        sorted.push(right[j++])
      } else if (compare === -1) {
        sorted.push(left[i++])
      }
    }

    return sorted
  }

}