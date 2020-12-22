import gridTraveler from './grid-traveler'

describe('grid-traveler', () => {
  describe('when givin small dimmentions', () => {
    it('1 x 1 returns 1', () => {
      expect(gridTraveler(1, 1)).toBe(1)
    })

    it('2 x 3 returns 3', () => {
      expect(gridTraveler(2, 3)).toBe(3)
    })
  })

  describe('when one edge is invalid', () => {
    it('0 x 1 returns 0', () => {
      expect(gridTraveler(0, 1)).toBe(0)
    })

    it('1 x 0 returns 0', () => {
      expect(gridTraveler(1, 0)).toBe(0)
    })
  })
})