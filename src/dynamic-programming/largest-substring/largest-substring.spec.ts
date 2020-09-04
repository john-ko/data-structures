import { largestSubstring } from './largest-substring'

describe('largest-subsequence', () => {
  it('returns the largest substring', () => {
    const sequence1 = 'APPLE'
    const sequence2 = 'BAPPLE'
    const largest = largestSubstring(sequence1, sequence2)

    expect(largest).toEqual(['A','P','P','L','E'])
  })
})