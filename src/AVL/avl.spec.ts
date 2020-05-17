const { test } = Deno
import { AVL } from './avl.ts'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

// const AVLTree = new AVL.AVLTree()

test('right leaning tree', () => {
  const avl = new AVL.AVLTree()
  avl.insert(1)
  avl.insert(2)
  avl.insert(3)
  avl.insert(4)
  avl.insert(5)
  avl.insert(6)
  avl.insert(7)

  const root = avl.getRoot()

  assertEquals(root?.data, 4)

  // avl.print()
})

test('left leaning tree', () => {
  const avl = new AVL.AVLTree()
  avl.insert(7)
  avl.insert(6)
  avl.insert(5)
  avl.insert(4)
  avl.insert(3)
  avl.insert(2)
  avl.insert(1)

  const root = avl.getRoot()

  assertEquals(root?.data, 4)
  avl.print()
})

test('compare', () => {
  const nodeA = new AVL.Node(1)
  const nodeB = new AVL.Node(2)

  const compare = AVL.AVLTree.defaultCompare

  const results = compare(nodeA, nodeB)

  assertEquals(results, -1)
})