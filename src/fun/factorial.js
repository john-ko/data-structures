/**
 * Factorial
 * Modify the function so that it returns the factorial of an input number Use recursion!
 * The factorial of n is the product of all numbers between 1 and n
 * Ex: 5! = 5 * 4 * 3 * 2 * 1
 *
 * @param {Number} - number
 */
function factorial (number) {
  if (number === 1) {
    return number
  }

  return number * factorial(number - 1)
}
