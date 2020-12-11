import canSum from './can-sum'

describe('can-sum', () => {
  it('sums up 7, [5, 3, 4, 7]', () => {
    expect(canSum(7, [5, 3, 4, 7])).toBe(true)
  })
})