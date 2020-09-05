import {
  lcsRecursive,
  lscTable
} from './longest-common-subsequence'

describe('longest-common-subsequence', () => {
  const a1 = 'ABCDGH'
  const a2 = 'AEDFHR'

  const b1 = 'AGGTAB'
  const b2 = 'GXTXAYB'

  describe('recursive', () => {
    it('str a: `ABCDGH` and `AEDFHR`', () => {
      expect(lcsRecursive(a1, a2)).toBe(3)
    })

    it('str b: `AGGTAB` and `GXTXAYB`', () => {
      expect(lcsRecursive(b1, b2)).toBe(4)
    })

  })

  describe('table', () => {
    it('str a: `ABCDGH` and `AEDFHR`', () => {
      expect(lscTable(a1, a2)).toBe(3)
    })

    it('str b: `AGGTAB` and `GXTXAYB`', () => {
      expect(lscTable(b1, b2)).toBe(4)
    })
  })
})