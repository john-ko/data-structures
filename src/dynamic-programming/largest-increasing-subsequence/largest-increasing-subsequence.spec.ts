import { lis } from './largest-increasing-subsequence'

describe('largest-increasing-subsequence', () => {

  it('sets the list of size 6', () => {
    // [10, 9]
    // [22, 21]
    // [33]
    // [50, 41]
    // [60]
    // [80]
    const list = [10, 22, 9, 33, 21, 50, 41, 60, 80]
    expect(lis(list)).toEqual([
      [10, 9],
      [22, 21],
      [33],
      [50, 41],
      [60],
      [80],
    ])
  })

  it('returns a list of size 4', () => {
    // [10, 5, 3]
    // [8, 4]
    // [9]
    // [12, 11]
    const list = [10, 5, 8, 3, 9, 4, 12, 11]
    expect(lis(list)).toEqual([
      [10, 5, 3],
      [8, 4],
      [9],
      [12, 11],
    ])
  })
})