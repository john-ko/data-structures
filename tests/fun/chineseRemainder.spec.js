import chineseRemainder from '@/src/fun/chineseRemainder'
import {
  findAllRemainders,
  findLargestNumberAndItsRemainder,
} from '@/src/fun/chineseRemainder'

describe('chineseRemainder', () => {
  describe('findLargestNumberAndItsRemainder', () => {
    it('finds largest number and associated remainder', () => {
      const numberAndRemainder = findLargestNumberAndItsRemainder([1,2,3], [4,5,6])
      expect(numberAndRemainder).toEqual([3,6])

    })
  })

  describe('findAllRemainders', () => {
    it('returns false if none is found', () => {
      const isFound = findAllRemainders([1,2,3], [1,2,3], 4)

      expect(isFound).toBe(false)
    })

    it('returns false if none is found', () => {
      const isFound = findAllRemainders([2, 3], [0, 2], 8)

      expect(isFound).toBe(true)
    })
  })

  it('returns 0 if nothing is passed', () => {
    expect(chineseRemainder()).toBe(0)
  })

  it('returns 31 when num[] = {5, 7}, rem[] = {1, 3}', () => {
    expect(chineseRemainder([5,7], [1,3])).toBe(31)
  })

  it('when the multiple number is 0', () => {
    // target number 8
    expect(chineseRemainder([5,7], [3,1])).toBe(8)
  })
})