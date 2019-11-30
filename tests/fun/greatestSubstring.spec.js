import greatestSubstring from '@/src/fun/greatestSubstring'

import {
  checkDiagonal
} from '@/src/fun/greatestSubstring'

describe('greatestSubstring', () => {
  it('if it doesn\'t match it returns 0', () => {
    expect(greatestSubstring('abc', 'efg')).toBe(0)
  })

  it('returns longest matching string', () => {
    expect(greatestSubstring('apple', 'pineapple')).toBe(5)
  })

  it('returns 1 if the last character match', () => {
    expect(greatestSubstring('orange', 'pipe')).toBe(1)
  })

  describe('checkDiagonal', () => {
    it('won\'t break when out of bounds', () => {
      expect(checkDiagonal([[],[]], 2, 4)).toBe(0)
    })

    it('returns longest length match', () => {
      const matrix = [
        [true, false ,false],
        [false, true ,false],
        [false, false ,true],
      ]

      expect(checkDiagonal(matrix, 0, 0)).toBe(3)
    })
  })
})

