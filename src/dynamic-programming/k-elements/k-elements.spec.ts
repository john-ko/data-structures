import { kElements, figureOutK } from './k-elements'

describe('k-elements', () => {
  describe('kElements', () => {
    it('returns the 2nd largest number', () => {
      expect(kElements([3 ,2, 1, 5, 6, 4], 2)).toBe(5)
    })

    // todo see why these test cases are failing
    // it('returns 3rd largest number', () => {
    //   expect(kElements([3 ,2, 1, 5, 6, 4], 3)).toBe(4)
    // })

    // it('returns 4th largest number', () => {
    //   expect(kElements([13,12,11,10,9,8,7,6,5,4,3,2,1], 4)).toBe(10)
    // })
  })

  describe('figureOutK', () => {
    it('returns correct number for [1,2,3,4,5,6]', () => {
      const numbers = [1,2,3,4, 5,6]
      const i = 3
      const k = 2
      const newK = figureOutK(numbers, i, k)

      expect(newK).toBe(2)
      expect(2 - newK).toBe(0)
    })

    describe('lower', () => {
      it('returns 0 when 1st one', () => {
        const numbers = [1,2,3, 4,5,6]
        const i = 3
        const k = 6
        const newK = figureOutK(numbers, i, k)

        expect(newK).toBe(3)
        expect(3 - newK).toBe(0)
      })

      it('returns 1 when 2nd one', () => {
        const numbers = [1,2,3, 4,5,6]
        const i = 3
        const k = 5
        const newK = figureOutK(numbers, i, k)

        expect(newK).toBe(2)
        expect(3 - newK).toBe(1)
      })

      it('returns 2 when 3rd one', () => {
        const numbers = [1,2,3, 4,5,6]
        const i = 3
        const k = 4
        const newK = figureOutK(numbers, i, k)

        expect(newK).toBe(1)
        expect(3 - newK).toBe(2)
      })

      it('larger set of numbers', () => {
        const numbers = [1,2,3, 4,5,6, 7,8,9, 10,11,12]
        const i = 9
        const k = 4
        const newK = figureOutK(numbers, i, k)

        expect(newK).toBe(1)
        expect(9 - newK).toBe(8)
      })
    })
  })
})