export default class Heap {
  private heap: number[]
  constructor (heap?: number[]) {
    this.heap = []
    if (heap) {
      this.heapify(heap)
    }
  }

  insert (node: number) {
    this.heap.push(node)

    let current = this.heap.length - 1

    while (current >= 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
      [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
      current = Math.floor(current/2)
    }
  }

  heapify (heap: number[]) {
    heap.forEach(item => {
      this.insert(item)
    })
  }

  getHeap (): number[] {
    return this.heap
  }
}