import HashMap from '@/src/HashMap'

describe('HashMaps', () => {
  let hashMap

  beforeEach(() => {
    hashMap = new HashMap()
  })

  describe('isTableAlmostFull', () => {
    it('returns false when empty', () => {
      const boolean = hashMap.isTableAlmostFull()

      expect(boolean).toBe(false)
    })

    it('returns true when table is more than 70% full', () => {
      hashMap.size = 8
      const boolean = hashMap.isTableAlmostFull()

      expect(boolean).toBe(true)
    })
  })

  describe('add', () => {
    it('expects a hash item to be in the right key', () => {
      const key = 'asdf'
      hashMap.add(key, 'value')

      expect(hashMap.table[4]).toMatchObject({ key: 'asdf', value: 'value' })
    })

    it('when theres a collision it should be in the next key', () => {
      // collisions for % 10
      // both resolve to key 4
      const collision1 = 'asdf'
      const collision2 = '6'

      hashMap.add(collision1, collision1)
      hashMap.add(collision2, collision2)

      expect(hashMap.table[4]).toMatchObject({ key: 'asdf', value: 'asdf' })
      expect(hashMap.table[5]).toMatchObject({ key: '6', value: '6' })
    })

    it('loops back to 1st entry if collision happens at the last key', () => {
      // both resolve to key 9
      const collision1 = '1'
      const collision2 = '12'

      hashMap.add(collision1, collision1)
      hashMap.add(collision2, collision2)

      expect(hashMap.table[9]).toMatchObject({ key: '1', value: '1' })
      expect(hashMap.table[0]).toMatchObject({ key: '12', value: '12' })
    })

    it('table should grow when the table is more than 70% full', () => {
      for (let i = 0; i < 9; i++) {
        const index = `${i}`
        hashMap.add(index, index)
      }

      // expect table length to double
      expect(hashMap.size).toBe(9)
      expect(hashMap.table.length).toBe(20)
      expect(hashMap.tableSize).toBe(20)
    })

    it('when keys are the same it should overwrite value', () => {
      hashMap.add('asdf', 'value1')
      hashMap.add('asdf', 'value2')

      expect(hashMap.table[4]).toMatchObject({
        key: 'asdf',
        value: 'value2'
      })
    })
  })
})
