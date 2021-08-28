import matrixSum, { sumDigits } from './matrix-sum-v2'

describe('matrix-sum v2', () => {
  describe('matrixSum', () => {
    it('works with 5x5', () => {
      const fiveByFive = [
        [123456789,752880530,826085747,576968456,721429729],
        [173957326,1031077599,407299684,67656429, 96549194],
        [1048156299,663035648,604085049,1017819398,325233271],
        [942914780,664359365,770319362,52838563, 720059384],
        [472459921,662187582,163882767,987977812,394465693],
      ]

      expect(matrixSum(fiveByFive)).toEqual([
        173957326, 752880530, 604085049, 52838563, 325233271
      ])
    })
  })

  describe('sumDigits', () => {
    it('sums digits of a number', () => {
      expect(sumDigits(10)).toEqual(1)
      expect(sumDigits(5)).toEqual(5)
      expect(sumDigits(12345)).toEqual(15)
    })
  })
})