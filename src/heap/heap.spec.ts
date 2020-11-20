import Heap from './heap'

describe('heap', () => {
  describe('creates a min heap from an array', () => {
    it('base example', () => {
      const arr = [14, 6, 8, 2]
      const heap = new Heap(arr)

      expect(heap.getHeap()).toEqual([2, 6, 14, 8])
    })

    it('https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65', () => {
      const arr = [10, 23, 36, 18]
      const heap = new Heap(arr)

      expect(heap.getHeap()).toEqual([10, 18, 36, 23])
    })
  })

  describe('insert', () => {

  })
})