import { editDistance, findMin } from './edit-distance'

describe('edit-distance', () => {
  describe('GEEK & GESEK', () => {
    it('returns 1', () => {
      expect(editDistance('GEEK', 'GESEK')).toBe(1)
    })
  })

  describe('SUNDAY & SATURDAY', () => {
    it('returns 3', () => {
      expect(editDistance('SUNDAY', 'SATURDAY')).toBe(3)
    })
  })

  describe('findMin', () => {
    it('returns min from top corner', () => {
      const matrix: number[][] = [[0, 1],[2, 333]]
      expect(findMin(matrix, 1, 1)).toBe(0)
    })

    it('returns min from a top', () => {
      const matrix: number[][] = [[3, 1],[2, 333]]
      expect(findMin(matrix, 1, 1)).toBe(1)
    })

    it('returns min from a left', () => {
      const matrix: number[][] = [[5, 3],[2, 333]]
      expect(findMin(matrix, 1, 1)).toBe(2)
    })
  })
})