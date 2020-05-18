/**
 * usage for Deno
 *
 * $ deno test avl.spec.ts
 */

const { test } = Deno
import { LinkedList } from './LinkedList.ts'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'


test('find: false case', () => {
  const ll = new LinkedList.LinkedList()
  ll.insert(1)
  ll.insert(2)
  assertEquals(ll.find(3), false)
})

test('find: true case', () => {
  const ll = new LinkedList.LinkedList()
  ll.insert(1)
  ll.insert(2)
  assertEquals(ll.find(2), true)
})

test('remove: false case', () => {
  const ll = new LinkedList.LinkedList()
  ll.insert(1)
  ll.insert(2)
  ll.insert(3)
  ll.insert(4)
  assertEquals(ll.remove(5), false)
})

test('remove: true case', () => {
  const ll = new LinkedList.LinkedList()
  ll.insert(1)
  ll.insert(2)
  ll.insert(3)
  ll.insert(4)
  assertEquals(ll.remove(4), true)
})