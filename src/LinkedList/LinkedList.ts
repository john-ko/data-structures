export namespace LinkedList {
  export class LinkedListNode {
    public data: number | null
    public next: LinkedListNode | null

    constructor (data: number | null) {
      this.data = data
      this.next = null
    }
  }

  export class LinkedList {
    private root: LinkedListNode
    constructor () {
      this.root = new LinkedListNode(null)
    }

    public print (logger?: any) {
      if (!logger) {
        logger = console.log
      }

      let printStr = 'root-> '
      let current = this.root

      while(current.next !== null) {
        current = current.next
        printStr += `(${current.data})-> `
      }

      printStr += 'null'

      logger(printStr)
    }

    public insert (number: number): number {
      let current = this.root

      while(current.next !== null) {
        current = current.next
      }

      current.next = new LinkedListNode(number)

      return number
    }

    public find (number: number): boolean {
      return Boolean(this._findNode(number))
    }

    public remove (number: number): boolean {
      let current: LinkedListNode | null = this.root

      while (current.next !== null) {
        if (current.next.data === number) {
          current.next = current.next.next
          return true
        }

        current = current.next
      }

      return false
    }

    private _findNode (number: number): LinkedListNode | boolean {
      let current: LinkedListNode | null = this.root

      while(current !== null) {
        if (current.data === number) {
          return current
        }

        current = current.next
      }

      return false
    }
  }
}