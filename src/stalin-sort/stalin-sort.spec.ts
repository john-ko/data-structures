import { stalin_sort, send_to_gulag } from './stalin-sort'

describe('stalin sort', () => {
  describe('stalin_sort', () => {
    it('sends out of place numbers to the gulag', () => {
      expect(stalin_sort([1,2,3,1,4,5,6])).toEqual([
        1, 2, 3, 4, 5, 6
      ])
    })

    it('works with the main use case in the readme', () => {
      const goons = [1,2,5,3,5,7]

      expect(stalin_sort(goons)).toEqual(
        [1,2,5,5,7]
      )
    })
  })

  describe('send_to_gulag', () => {
    it('dies', () => {
      expect(send_to_gulag(5)) // .toBeDead()
    })
  })
})