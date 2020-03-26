/**
 * finds longest non-repeating substring of characters
 * O(n)
 *
 * @param {String} letters
 * @returns {Object}
 */
function longestNonRepeatingSubstring (letters = '') {
  const hashmap = new Map()
  let longest = []
  let max = 0
  let count = 0
  let start = 0
  let end = 0

  while(end < letters.length) {
    const endLetter = letters[end]

    if (!hashmap.has(endLetter)) {
      hashmap.set(endLetter, end)
      count++
    } else {
      if (start <= hashmap.get(endLetter)) {
        start = hashmap.get(endLetter) + 1
      }
      count = (end - start) + 1
      hashmap.set(endLetter, end)
    }

    if (count > max) {
      max = count
      longest = []
    }

    if (max == count) {
      longest.push(letters.substring(start, end + 1))
    }

    end++
  }

  return {
    max,
    longest,
  }
}

if (require.main === module) {
  const test1 = 'ABDEFGBAEF'
  const test2 = 'GEEKSFORGEEKS'
  console.log(longestNonRepeatingSubstring(test1))
  console.log(longestNonRepeatingSubstring(test2))
}
