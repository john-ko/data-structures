import getWays, { recursiveWay } from './coin-change-problem'

describe('coin-change-problem', () => {
  const testCases = [
    {
      target: 10,
      numbers: [2, 5, 3, 6],
      ways: 5,
    },
    {
      target: 3,
      numbers: [8, 1, 2, 3],
      ways: 3,
    }
  ]

  it('testCases', () => {
    testCases.forEach(test => {
      expect(getWays(test.target, test.numbers)).toBe(test.ways)
    })
  })

  describe('recursiveWay', () => {
    it('works', () => {
      testCases.forEach(test => {
        const set = new Set<string>()
        recursiveWay(test.target, test.numbers, [], set)
        expect(set.size).toBe(test.ways)
      })
    })
  })
})
