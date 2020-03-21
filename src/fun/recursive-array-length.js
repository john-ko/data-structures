/**
 * Get Length
 * Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!
 * Hint: when you index outside of an array, it returns undefined
 *
 * @param {*} [array=[]]
 */
function getLength (array = [], index = 0) {
  return array[index] ? getLength(array, index + 1): index
}
