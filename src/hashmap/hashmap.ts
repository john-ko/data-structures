/**
 * hashmap
 * usage:
 * const hashmap = new HashMap()
 * hashmap.add('a', 1)
 */


export class HashMap<K extends unknown, V extends unknown> {
  private size = 10
  private items: [K, V][] = []
  private ratio = 0.7
  private current_size = 0
  constructor(configuration?: { ratio: number }) {
    this.items = new Array(10)

    if (configuration?.ratio) {
      this.ratio = configuration.ratio
    }
  }

  set(key: K, value: V): V {
    const hashIndex = this.hash(key)
    const item = this.items[hashIndex]
    this.items[hashIndex] = [key, value]

    if (!item) {
      this.current_size++

      // see if it needs to double
      this.need_resize()
    }

    return value
  }

  get(key: K): V | undefined {
    const hashIndex = this.hash(key)
    const item = this.items[hashIndex]
    
    if (item) {
      return item[1]
    }

    return undefined
  }

  hash (key: K) {
    if (typeof key === 'object') {}

    return 5 % this.size
  }

  private calculate_ratio(): number {
    return this.current_size / this.size
  }

  private need_resize() {
    if (this.calculate_ratio() > this.ratio) {
      this.rehash()
    }
  }

  private rehash() {
    // double size
    this.size *= 2
    const new_items = Array(this.size)
    for (const item of this.items) {
      const key = item[0]
      const new_hash_index = this.hash(key)
      new_items[new_hash_index] = item
    }

    this.items = new_items
  }
  
}