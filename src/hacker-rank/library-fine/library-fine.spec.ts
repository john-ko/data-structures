import { libraryFineTs } from './library-fine'

describe('library-fine', () => {
  it('fine is $0 if the book was returned before due date', () => {
    const bookReturned = new Date('2019')
    const dueDate = new Date('2020 01 01')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(0)
  })

  it('fine is $0 if the book was returned on the due date', () => {
    const bookReturned = new Date('2020 01 01')
    const dueDate = new Date('2020 01 01')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(0)
  })

  it('fine is max if book is returned more than 1 year after and past the new year', () => {
    const bookReturned = new Date('2020 01 01')
    const dueDate = new Date('2018 12 31')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(20000)
  })

  it('fine is max if book is returned more than 1 year after due date', () => {
    const bookReturned = new Date('2020 02 01')
    const dueDate = new Date('2019 01 31')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(10000)
  })

  it('fine is $15 if its one calendar day late', () => {
    const bookReturned = new Date('2020 01 02')
    const dueDate = new Date('2020 01 01')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(15)
  })

  it('fine is $500 if it is one calendar month late', () => {
    const bookReturned = new Date('2020 02 02')
    const dueDate = new Date('2020 01 01')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(500)
  })

  it('test case provided by hackerrank', () => {
    const bookReturned = new Date('2015 06 09')
    const dueDate = new Date('2015 06 06')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(45)
  })

  it('December 31, 2017, if it is returned January 1, 2018, the fine is 10000', () => {
    const bookReturned = new Date('2018 01 01')
    const dueDate = new Date('2017 12 31')

    const fine = libraryFineTs(bookReturned, dueDate)

    expect(fine).toBe(10000)
  })
})
