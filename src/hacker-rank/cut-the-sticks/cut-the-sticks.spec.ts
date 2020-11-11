import cutTheSticks, { getNumberOfCuts, reduceSticks, smallestStick } from './cut-the-sticks'

describe('cut-the-sticks', () => {
  describe('getNumberOfCuts', () => {
    it('works for sample0', () => {
      const given = [5, 4, 4, 2, 2, 8]
      expect(getNumberOfCuts(given)).toEqual([6, 4, 2, 1])
    })
    
    it('works for sample1', () => {
      const given = [1, 2, 3, 4, 3, 3, 2, 1]
      expect(getNumberOfCuts(given)).toEqual([8, 6, 4, 1])
    })
  })

  describe('smallestStick', () => {
    it('gets the smallest number from the array of numbers', () => {
      const given = [4, 6, 7, 3, 4, 8, 1]
  
      expect(smallestStick(given)).toBe(1)
    })
  })

  describe('reduceSticks', () => {
    it('reduces the number subtracted by the smallest', () => {
      const given = [5, 4, 4, 2, 2, 8]
      const smallest = 2
  
      expect(reduceSticks(given, smallest)).toEqual([3, 2, 2, 6])
    })
    
    it('it works with 1 item', () => {
      const given = [1]
      const smallest = 1

      expect(reduceSticks(given, smallest)).toEqual([])
    })

    it('works with [1, 4]', () => {
      const given = [1, 4]
      const smallest = 1

      expect(reduceSticks(given, smallest)).toEqual([3])
    })
  })
})
