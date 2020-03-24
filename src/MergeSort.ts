/**
 * inplace merge sort
 */
class MergeSort {
  items: any[]
  constructor (items: [] | undefined) {
    this.items = items || []
  }

  // [1,2,3,4]
  // 0,1, 2
  sort (array: any[]): any[] {
    const start = 0
    const end = array.length
    const middle = Math.floor(end / 2)

    return this.merge(array, start, middle, end)
  }

  merge (array: any[], start: number, middle: number, end: number): any[] {

    return array
  }

}