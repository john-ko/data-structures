import words from './word-list.json'

export interface Letter {
  letter: string
  type: 'GREY' | 'YELLOW' | 'GREEN'
  position?: number
}

export function solver (guesses: Letter[], words: string[]) {
  let filtered_words = [...words]
  for (let guess of guesses) {
    filtered_words = filter_words(guess, filtered_words)
  }
  console.log(filtered_words)
}

export function squish_guesses (guesses: Letter[]) {
  const letter_map = new Map<string, Letter>()

  for (let guess of guesses) {
    let guessy = letter_map.get(guess.letter)

    if (guessy) {
      guess = is_type_higher_or_lower_priority(guessy, guess)
    }

    letter_map.set(guess.letter, guess)
  }

  return Array.from(letter_map.values())
}

export function is_type_higher_or_lower_priority (l1: Letter, l2: Letter) {
  if (l1.letter !== l2.letter) {
    throw new Error(`Letters must be the same ${l1.letter}: ${l2.letter}`)
  }

  if (l1.type === 'GREY') {
    return l2
  }

  if (l2.type === 'GREY') {
    return l1
  }

  if (l1.type === 'GREEN') {
    return l1
  }

  if (l2.type === 'GREEN') {
    return l2
  }

  return l1
}

export function filter_words(guess: Letter, filtered_words: string[]): string[] {
  if (guess.type === 'GREY') {
    return filter_grey_letter(guess.letter, filtered_words)
  }

  if (guess.position === undefined) {
    throw new Error(`yellow or green with unknown position ${guess.letter}, ${guess.type}`)
  }

  if (guess.type === 'GREEN') {
    return filter_green_letter(guess.letter, guess.position, filtered_words)
  }
  
  // must be yellow
  return filter_yellow_letter(guess.letter, guess.position, filtered_words)
}

export function filter_grey_letter(letter: string, words: string[]): string[] {
  return words.filter(word => !word.includes(letter))
}

export function filter_yellow_letter(letter: string, pos: number, words: string[]) {
  return words.filter(word => word.includes(letter) && word[pos] !== letter)
}

export function filter_green_letter(letter: string, pos: number, words: string[]) {
  return words.filter(word => word[pos] === letter)
}

// const guesses: Letter[] = [
//   {
//     letter: 'i',
//     type: 'GREY',
//   },
//   {
//     letter: 'r',
//     type: 'YELLOW',
//     position: 1
//   },
//   {
//     letter: 'a',
//     type: 'GREY'
//   },
//   {
//     letter: 't',
//     type: 'YELLOW',
//     position: 3
//   },
//   {
//     letter: 'e',
//     type: 'YELLOW',
//     position: 4
//   },

//   {
//     letter: 'r',
//     type: 'YELLOW',
//     position: 0
//   },

//   {
//     letter: 'e',
//     type: 'YELLOW',
//     position: 1
//   },

//   {
//     letter: 't',
//     type: 'YELLOW',
//     position: 4
//   },

//   {
//     letter: 'b',
//     type: 'GREY',
//   },
//   {
//     letter: 'u',
//     type: 'GREY',
//   },
// ]

// solver(guesses, words)