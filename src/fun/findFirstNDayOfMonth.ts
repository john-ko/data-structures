// @ts-ignore
const { test } = Deno
// @ts-ignore
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

enum DAY {
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
  let delta = day - startDay

  if (delta < 0) {
    delta += 7
  }

  for (let i = 0; i < ordinal; i++) {
    delta = i * 7 + delta
    date.setDate(delta + 1)

    if (date.getMonth() === (month - 1)) {
      days.push(date.getDate())
    }
  }

  return days[days.length - 1]
}

test('find the 3rd sunday of march 2020', () => {
  assertEquals(dayOfMonth(3, DAY.SUNDAY, 3, 2020), 22)
})

test('find thanksgiving 2020', () => {
  assertEquals(dayOfMonth(5, DAY.THURSDAY, 11, 2020), 26)
})