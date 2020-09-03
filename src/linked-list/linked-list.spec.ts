import {
  Node,
  LinkedList
} from './linked-list'

describe('linked-list', () => {
  describe('Node', () => {
    it('sets data', () => {
      const node: Node = new Node(5)

      expect(node.data).toBe(5)
      expect(node.next).toBe(null)
    })

    it('set next to another node', () => {
      const nextNode: Node = new Node(1)
      const currNode: Node = new Node(4)

      currNode.next = nextNode

      expect(currNode.next).toEqual({data: 1, next: null})
    })
  })

  describe('LinkedList', () => {
    describe('add', () => {
      it('adds a node to head', () => {
        const linkedList: LinkedList = new LinkedList()
        linkedList.add(5)

        expect(linkedList.head?.data).toBe(5)
      })

      it('adds another node to end', () => {
        const linkedList: LinkedList = new LinkedList()
        linkedList.add(5)
        linkedList.add(4)
        linkedList.add(3)

        expect(linkedList.head?.next?.next?.data).toBe(3)
      })
    })

    describe('remove', () => {
      it('removes when theres only 1 element', () => {
        const linkedList: LinkedList = new LinkedList()
        linkedList.add(5)
        expect(linkedList.remove(5)).toBe(true)
        expect(linkedList.head).toBe(null)
      })

      it('removes a middle item', () => {
        const linkedList: LinkedList = new LinkedList()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        expect(linkedList.remove(2)).toBe(true)
        expect(linkedList.head?.data).toBe(1)
        expect(linkedList.head?.next?.data).toBe(3)
      })
    })

    describe('shift', () => {
      it('returns undefined if nothing is available', () => {
        const linkedList: LinkedList = new LinkedList()
        expect(linkedList.shift()).toBe(undefined)
      })

      it('returns the 1st element', () => {
        const linkedList: LinkedList = new LinkedList()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        expect(linkedList.shift()).toBe(1)
        expect(linkedList.head?.data).toBe(2)
        expect(linkedList.head?.next?.data).toBe(3)
      })
    })

    describe('find', () => {
      it('returns number', () => {
        const linkedList: LinkedList = new LinkedList()
        linkedList.add(1)
        linkedList.add(2)

        expect(linkedList.find(1)).toBe(1)
        expect(linkedList.find(2)).toBe(2)
        expect(linkedList.find(3)).toBe(undefined)
      })
    })
  })
})