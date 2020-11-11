export default function (sticks: number[]): number[] {
  return getNumberOfCuts(sticks)
}

export function getNumberOfCuts (sticks: number[]): number[] {
  const numberOfCuts = []
  let current = [...sticks]
  let smallest = smallestStick(sticks)
  
  while (current.length >= 1) {
    numberOfCuts.push(current.length)
    current = reduceSticks(current, smallest)
    smallest = smallestStick(current)
  }

  return numberOfCuts
}

export function smallestStick (sticks: number[]): number {
  return Math.min(...sticks)
}

export function reduceSticks (sticks: number[], smallest: number): number[] {
  return sticks.reduce((acc: number[], stick) => {
    const num = stick - smallest
    
    if (num > 0) {
      acc.push(num)
    }

    return acc
  }, [])
}