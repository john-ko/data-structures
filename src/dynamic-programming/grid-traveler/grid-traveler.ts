
export default function gridTraveler (m: number, n: number, memo: Map<string, number> = new Map<string, number>()): number {
  const key = `${m},${n}`

  if (memo.has(key)) {
    // @ts-ignore
    return memo.get(key)
  }

  if (m === 1 && n === 1) {
    return 1
  }

  if (m === 0 || n === 0) {
    return 0
  }
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}
