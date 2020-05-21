import MergeSort from './MergeSort.ts'
const { test } = Deno
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

test('in place sort - wip', () => {
  const ms = new MergeSort()
  const sorted = ms.inPlaceSort([3,2,1])

  // assertEquals(sorted, [1,2,3])
})

test('new array mergesort', () => {
  const ms = new MergeSort()
  const sorted = ms.mergeSort([1,3,6,4,5])

  assertEquals(sorted, [1,3,4,5,6])
})