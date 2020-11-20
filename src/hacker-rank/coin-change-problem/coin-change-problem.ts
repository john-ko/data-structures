export default function getWays (n: number, c: number[]): number {
  const results = new Set<string>()
  recursiveWay(n, c, [], results)

  return results.size
}

export function recursiveWay (n: number, c: number[], current: number[], results: Set<string>) {
  if (n < 0) {
    return
  }

  if (n === 0) {
    results.add(current.sort().toString())
    return
  }

  for (let num of c) {
    recursiveWay(n - num, c, [...current, num], results)
  }
}
