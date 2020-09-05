import { Queue } from './queue'

describe('queue', () => {
  it('enqueue', () => {
    const queue = new Queue()

    queue.enqueue(1)

    expect(queue.peek()).toBe(1)
    expect(queue.isEmpty()).toBe(false)
  })

  it('dequeue', () => {
    const queue = new Queue()

    queue.enqueue(1)

    const item = queue.dequeue()

    expect(item).toBe(1)
    expect(queue.isEmpty()).toBe(true)
  })
})