export default function libraryFine(d1: string, m1: string, y1: string, d2: string, m2:string, y2: string): number {
  const bookReturned = new Date(`${y1} ${m1} ${d1}`)
  const bookDue = new Date(`${y2} ${m2} ${d2}`)
  return libraryFineTs(bookReturned, bookDue)
}

export function libraryFineTs(bookReturned: Date, bookDue: Date): number {
  if (bookReturned <= bookDue) {
    return 0
  }

  const bookReturnedYear = bookReturned.getFullYear()
  const bookDueYear = bookDue.getFullYear()
  const bookYearDelta = bookReturnedYear - bookDueYear

  if (bookYearDelta >= 1) {
    return bookYearDelta * 10000
  }

  const bookReturnedMonth = bookReturned.getMonth()
  const bookDueMonth = bookDue.getMonth()

  if (bookReturnedMonth === bookDueMonth) {
    return (bookReturned.getDate() - bookDue.getDate()) * 15
  }

  return (bookReturnedMonth - bookDueMonth) * 500
}