/**
 * Repeater
 * Modify the function so that it returns a string containing
 * the input character repeated 5 times Use recursion!
 *
 * @param {*} char
 * @param {number} [n=5]
 */
function repeater (char, n = 5) {
  if (n === 1) {
    return char
  }

  return char + repeater(char, n - 1)
}
