const { test } = Deno
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
// Input: K = 4, X = 35
//        arr[] = {12, 16, 22, 30, 35, 39, 42,
//                45, 48, 50, 53, 55, 56}
// Output: 30 39 42 45

function kClosestElements (k: number, x: number, arr: number[]): number[] {
  let start: number = 0
  let end: number = (k < arr.length) ? arr.length : k

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]

  }
  return []
}

function binarySearch (array: number[], target: number, start: number, end: number) {
  const midpoint: number = Math.floor((end - start) / 2)
  const num = array[midpoint]

  console.log(start, midpoint, end)
  if (target < num) {
    //
  } else {

  }
}

test('binarySearch', () => {
  binarySearch([], 3, 0, 11)
})

test('test1', () => {
  console.log(123)
  // const day = dayOfMonth(4, DAY.SUNDAY, 3, 2020)
  // assertEquals(day, 22)
  assertEquals([1,2,3], [1,2,3])
})

test('test2', () => {
})

test('test3', () => {
  // const day = dayOfMonth(3, DAY.SUNDAY, 11, 2020)
  // assertEquals(day, 15)
})