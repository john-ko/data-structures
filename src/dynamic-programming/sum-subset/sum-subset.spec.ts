import { sumSubset } from './sum-subset'

describe('sum-subset', () => {
  it('returns a subsuet of unique numbers', () => {
    const numbers = [3, 34, 4, 12, 5, 2]
    const answer = sumSubset(numbers, 9)

    expect(answer).toEqual([[4, 5]])
  })

  it('returns empty array if none are found', () => {
    const numbers = [1, 2, 3]
    const answer = sumSubset(numbers, 100)

    expect(answer).toEqual([])
  })
})