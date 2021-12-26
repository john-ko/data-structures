export default function lengthOfLongestSubstring(s: string): number {
  const characters = s.split('')
  const map = new Map<string, number>()
  const set = new Set()

  let max = 0
  let end = 0
  let start = 0

  for (const character of characters) {
    if (map.has(character)) {
      // reset counter
      const old = map.get(character) as number
      start = old < start ? start : old
    }

    end++
    map.set(character, end)

    if ((end - start) > max) {
      max = end - start
    }
  }

  return max
}

