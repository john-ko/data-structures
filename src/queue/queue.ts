import { LinkedList } from '../linked-list/linked-list'

export class Queue {
  queue: LinkedList

  constructor () {
    this.queue = new LinkedList()
  }

  enqueue (item: any): any {
    return this.queue.add(item)
  }

  dequeue (): any | undefined {
    return this.queue.shift()
  }

  isEmpty (): boolean {
    return this.queue.length === 0
  }

  peek (): any | undefined {
    return this.queue.head?.data
  }
}
