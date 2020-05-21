export default class MergeSort {
  constructor (options = {}) {
    this.comparison = options.comparison || function (a, b) {
      return a < b
    }
  }

  sort (items = []) {
    const middle = items.length / 2

  }
}