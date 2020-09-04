import {
  item,
  knapsack01,
} from './knapsack-01'

describe('knapsack 0/1', () => {
  it('works', () => {
    const items: item[] = [
      { value: 7, weight: 5 },
      { value: 4, weight: 3 },
      { value: 5, weight: 4 },
      { value: 1, weight: 1 },
    ]
    expect(knapsack01(items, 7)).toBe(9)
  })

  it('returns 90', () => {
    const items: item[] = [
      { value: 60, weight: 5 },
      { value: 50, weight: 3 },
      { value: 70, weight: 4 },
      { value: 30, weight: 2 },
    ]
    expect(knapsack01(items, 5)).toBe(80)
  })
})