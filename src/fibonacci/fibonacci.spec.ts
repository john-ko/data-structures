import {
  fibonacciMemoize,
  fibonacciRecursive,
} from './fibonacci'

describe('fibonacci', () => {
  describe('calculated method', () => {
    it('works!', () => {})
  })

  describe('fibonacciRecursive', () => {
    it('returns the correct sequence', () => {
      expect(fibonacciRecursive(1)).toBe(0)
      expect(fibonacciRecursive(2)).toBe(1)
      expect(fibonacciRecursive(3)).toBe(1)
      expect(fibonacciRecursive(4)).toBe(2)
    })
  })

  describe('fibonacciIterative', () => {
    it('returns correct number from squence', () => {
      expect(fibonacciMemoize(10)).toBe(55)
      expect(fibonacciMemoize(15)).toBe(610)
    })
  })
})