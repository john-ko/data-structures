export function test (magazine: string[], note: string[]) {
  // const magazineSet = new Map(magazine)
  const noteMap = new Map<string, number>()
  const magazineMap = new Map<string, number>()

  for (const word of note) {
    let count = noteMap.get(word) || 0
    noteMap.set(word, ++count)
  }

  for (let word of magazine) {
    let count = magazineMap.get(word) || 0
    magazineMap.set(word, ++count)
  }

  console.log(noteMap)
  console.log(magazineMap)

  for (const word of note) {
    const magazineWord = magazineMap.get(word) || 0
    const noteWord = noteMap.get(word) || 0
    if (noteWord > magazineWord) {
      return console.log('No')
    }
  }

  return console.log('Yes')
}

const one = 'give me one grand today tonite'
const two = 'give one grand today'
test(one.split(' '), two.split(' '))
