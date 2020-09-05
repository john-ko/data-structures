import { largestSubstring } from './largest-substring'

describe('largest-subsequence', () => {
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