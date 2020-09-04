export class Node {
  public data: any
  public next: Node | null

  constructor (data: any) {
    this.data = data
    this.next = null
  }
}
export class LinkedList {
  public head: Node | null
  public length: number
  private comparator: (a: any, b: any) => boolean

  constructor(comparator?: () => boolean) {
    this.head = null
    this.length = 0
    this.comparator = comparator ?? ((a: number, b: number) => a === b)
  }

  addToFront (data: any) {
    const node: Node = new Node(data)
    node.next = this.head
    this.head = node

    return data
  }

  add (data: any): any {
    const node: Node = new Node(data)
    let current = this.head
    this.length++

    if (!current) {
      this.head = node
      return data
    }

    while(current.next) {
      current = current.next
    }

    current.next = node

    return data
  }

  find (data: any): any {
    let current = this.head

    if (!current) {
      return undefined
    }

    while (current) {
      if (this.comparator(current.data, data)) {
        return current.data
      }

      current = current.next
    }

    return undefined
  }

  remove (data: any): boolean {
    if (!this.head) {
      return false
    }

    let current = this.head

    if (this.comparator(this.head.data, data)) {
      this.head = this.head.next
      this.length--
      return true
    }

    while (current.next) {
      if (this.comparator(current.next.data, data)) {
        // found
        current.next = current.next.next
        this.length--
        return true
      }

      current = current.next
    }

    return false
  }

  shift (): any {
    if (!this.head) {
      return undefined
    }

    const current = this.head
    this.head = current.next
    this.length--

    return current.data
  }
}