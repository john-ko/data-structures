type queue = any

class Queue {
  queue: queue[]

  constructor () {
    this.queue = []
  }

  enqueue (item: queue): queue {
    this.queue.push(item)
  }

  dequeue (): queue | undefined {
    return this.queue.shift()
  }

  isEmpty (): boolean {
    return this.queue.length === 0
  }

  peek (): queue | undefined {
    return this.queue[this.queue.length - 1]
  }
}