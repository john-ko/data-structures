/**
 * usage for Deno
 *
 * $ deno test avl.spec.ts
 */

 // @ts-ignore
const { test } = Deno
// @ts-ignore
import { AVL } from './avl.ts'
// @ts-ignore
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

  // avl.print()
  assertEquals(root?.data, 4)

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

  // avl.print()
  assertEquals(root?.data, 4)
})

test('compare', () => {
  const nodeA = new AVL.Node(1)
  const nodeB = new AVL.Node(2)

  const compare = AVL.AVLTree.defaultCompare

  const results = compare(nodeA, nodeB)

  assertEquals(results, -1)
})

test('search with failure', () => {
  const avl = new AVL.AVLTree()
  avl.insert(17)
  avl.insert(26)
  avl.insert(13)
  avl.insert(4)
  avl.insert(15)
  avl.insert(52)
  avl.insert(21)

  avl.print()
  assertEquals(avl.find(3), false)
})

test('search with success', () => {
  const avl = new AVL.AVLTree()
  avl.insert(17)
  avl.insert(26)
  avl.insert(13)
  avl.insert(4)
  avl.insert(15)
  avl.insert(52)
  avl.insert(21)

  // avl.print()
  assertEquals(avl.find(21), 21)
})