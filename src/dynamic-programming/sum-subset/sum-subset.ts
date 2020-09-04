export function sumSubset (numbers: number[], target: number): number[][] {
  const numberMap: Map<number, number> = new Map()
  const answerSet = new Set()
  const answers: number[][] = []

  numbers.forEach(number => {
    numberMap.set(target - number, number)
  })

  numbers.forEach(number => {
    if (numberMap.has(number) && !answerSet.has(number)) {
      const secondary = numberMap.get(number) as number
      answerSet.add(number)
      answerSet.add(secondary)
      answers.push([number, secondary])
    }
  })

  return answers
}