import bucket_sort, {
  get_10s_place,
  get_n_place_digit,
} from './bucket-sort'

describe('bucket-sort', () => {
  describe('get_10s_place', () => {
    it('1 => 1', () => {
      expect(get_10s_place(1)).toBe(1)
    })

    it('2 => 10', () => {
      expect(get_10s_place(2)).toBe(10)
    })

    it('3 => 100', () => {
      expect(get_10s_place(3)).toBe(100)
    })
  })

  describe('get_n_place_digit', () => {
    it('123, 10 => 2', () => {
      expect(get_n_place_digit(123, 10)).toBe(2)
    })
  })

  describe('bucket_sort', () => {
    it('sorts', () => {
      const numbers = [300, 20, 1]
      expect(bucket_sort(numbers)).toEqual([1,20,300])
    })
  })
})