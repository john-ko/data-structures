/**
 * testing:
 * $ deno test ./findFirstNDayOfMonth.ts
 */

// @ts-ignore
const { test } = Deno
// @ts-ignore
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

export enum DAY {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY
}

/**
 * find the first sunday of april 2020
 * dayOfMonth(1, DAY.SUNDAY, 4, 2020)
 *
 * find the last thursday of nov 2020
 * dayOfMonth(5, DAY.THURSDAY, 11, 2020)
 * @param ordinal {number} 1 - 5, 5 being last
 * @param month {number}
 * @param year {number}
 */
export function dayOfMonth (ordinal: number, day: DAY, month: number, year: number): number {
  if (ordinal < 0 && ordinal > 5) {
    return -1
  }

  const date = new Date(year, month - 1)
  const days = []
  const startDay = date.getDay() // 5 = friday
  let delta = day - startDay + 1

  if (delta < 1) {
    delta += 7
  }

  for (let i = 0; i < ordinal; i++) {
    date.setDate(i * 7 + delta)

    if (date.getMonth() === (month - 1)) {
      days.push(date.getDate())
    }
  }

  return days[days.length - 1]
}

test('find the 4th sunday of march 2020', () => {
  const day = dayOfMonth(4, DAY.SUNDAY, 3, 2020)
  assertEquals(day, 22)
})

test('find thanksgiving 2020', () => {
  assertEquals(dayOfMonth(5, DAY.THURSDAY, 11, 2020), 26)
})

test('checking 0 based days', () => {
  const day = dayOfMonth(3, DAY.SUNDAY, 11, 2020)
  assertEquals(day, 15)
})