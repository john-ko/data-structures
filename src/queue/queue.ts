import { LinkedList } from '../linked-list/linked-list'

export class Queue<T> {
  queue: LinkedList<T>

  constructor () {
    this.queue = new LinkedList<T>()
  }

  enqueue (item: any): T {
    return this.queue.add(item)
  }

  dequeue (): T | undefined {
    return this.queue.shift()
  }

  isEmpty (): boolean {
    return this.queue.length === 0
  }

  peek (): T | undefined {
    return this.queue.head?.data
  }
}
