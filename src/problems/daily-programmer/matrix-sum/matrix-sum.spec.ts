import matrixSum from './matrix-sum'

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
        123456789, 662187582, 163882767, 52838563, 96549194
      ])
    })
  })
})