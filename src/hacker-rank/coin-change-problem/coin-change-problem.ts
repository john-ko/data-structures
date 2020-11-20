export default function getWays (n: number, c: number[]): number {

  return 0
}

function makeABucket (coins: number[]): Map<number, number> {
  return new Map(coins.map((coin) => [coin, 0]))
}

function recursiveWay (n: number, c: number[], results: string) {
  console.log(' n ', n)
  if (n < 0) {
    return
  }

  if (n === 0) {
    // found it! now what lol?
    console.log(' found 1', results)

  }

  for (let num of c) {
    console.log(n, num)
    recursiveWay(n - num, c, `${results},${num}`)
  }
}

recursiveWay(10, [2, 5, 3, 6], '')