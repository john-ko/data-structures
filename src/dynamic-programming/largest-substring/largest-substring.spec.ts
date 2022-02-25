import { largestSubstring, largestSubstringV2 } from './largest-substring'

describe('largest-subsequence', () => {
  describe('largestSubstring', () => {
    it('returns the largest substring', () => {
      const sequence1 = 'APPLE'
      const sequence2 = 'BAPPLE'
      const largest = largestSubstring(sequence1, sequence2)

      expect(largest).toEqual(['A','P','P','L','E'])
    })

    it('works with `passport` and `ppsspt`', () => {
      const sequence1 = 'passport'
      const sequence2 = 'ppsspt'
      const largest = largestSubstring(sequence1, sequence2)

      expect(largest).toEqual(['s', 's', 'p'])
    })
  })

  describe('largestSubstringV2', () => {
    it('returns max object', () => {
      const sequence1 = 'APPLE'
      const sequence2 = 'BAPPLE'
      const largest = largestSubstringV2(sequence1, sequence2)

      expect(largest).toEqual({"pos": {"i": 4, "j": 5}, "size": 5})
    })

    it('returns max object', () => {
      const sequence1 = 'APPOE'
      const sequence2 = 'BAPPLE'
      const largest = largestSubstringV2(sequence1, sequence2)

      expect(largest).toEqual({"pos": {"i": 2, "j": 3}, "size": 3})
    })
  })
})