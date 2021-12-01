import { rodCutting, rodCuttingRecursive } from './rod-cutting'

describe('rod-cutting problem', () => {
  describe('when given base case', () => {
    it('returns 4', () => {
      const length = [1, 2, 3, 4, 5, 6, 7, 8]
      const prices = [1, 5, 8, 9, 10, 17, 17, 20]

      expect(rodCutting(length, prices)).toEqual(4)
    })
  })

  describe('recursive', () => {
    it('returns 10', () => {
      const prices = [1, 5, 8, 9, 10, 17, 17, 20]
      
      expect(rodCuttingRecursive(prices, 4)).toEqual(10)
    })

    it('returns 6', () => {
      const prices = [1, 2, 3, 4, 6]
      expect(rodCuttingRecursive(prices, 5)).toEqual(6)
    })

    it('returns 18', () => {
      const prices = [6, 5, 4]

      expect(rodCuttingRecursive(prices, 3)).toEqual(18)
    })
  })
})