import { BinarySearchTree } from './binary-tree'

describe('binary-tree', () => {
  describe('insert', () => {
    const bst = new BinarySearchTree()
    bst.insert(5)
    bst.insert(4)
    bst.insert(6)
    const root = bst.root

    it('sets root node if no node is available', () => {
      expect(root?.data).toBe(5)
    })

    it('smaller values go left', () => {
      expect(root?.left?.data).toBe(4)
      expect(root?.right?.data).toBe(6)
    })
  })

  describe('remove', () => {
    it('removes root if thats only available', () => {
      const bst = new BinarySearchTree()
      bst.insert(5)
      bst.remove(5)
      expect(bst.root).toBe(null)
    })
  })
})