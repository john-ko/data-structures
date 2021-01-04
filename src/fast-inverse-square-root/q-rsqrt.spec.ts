import { Q_rsqrt } from './q-rsqrt'

describe('Fast inverse square root', () => {
  it('approximates the inverse sqrt of 2', () => {
    // 1 / sqrt(2) = 0.7071067811865476
    const inverseSqrt = 0.7071067811865476

    // Q_rsqrt(2)  ≈ 0.7069300386983334
    const approximation = 0.7069300386983334

    // expect approximation
    expect(Q_rsqrt(2)).toEqual(approximation)

    // expect error rate to be less than 1%
    expect(1 - (approximation / inverseSqrt)).toBeLessThan(0.01)
  })
})