import lengthOfLongestSubstring from './longest-substring'

describe('lengthOfLongestSubstring', () => {
  describe('abcabcbb => 3', () => {
    it('returns 3', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    })
  })

  describe('bbbbb => 1', () => {
    it('returns 1', () => {
      expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    })
  })

  describe('pwwkew => 3', () => {
    it('returns 3', () => {
      expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    })
  })

  //"dvdf"
  describe('dvdf => 3', () => {
    it('returns 3', () => {
      expect(lengthOfLongestSubstring('dvdf')).toBe(3)
    })
  })

  describe('"tmmzuxt" => 5', () => {
    it('returns 5', () => {
      expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5)
    })
  })
})