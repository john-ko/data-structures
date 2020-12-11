import { transform1 } from './transform'

describe('transform', () => {
  const items = [
    'a',
    'b',
    'b',
    'b',
    'c',
    'a',
    'a',
  ]

  const expectedResults = [
    ['a'],
    ['b', 'b','b'],
    ['c'],
    ['a', 'a']
  ]

  it('transform1', () => {
    const results = transform1(items)

    expect(results).toEqual(expectedResults)
  })
})