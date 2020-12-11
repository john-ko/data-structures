import transform1 from './transform1'

describe('transform1', () => {
  it('works', () => {
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
      'a',
      ['b', 'b','b'],
      'c',
      ['a', 'a']
    ]

    const results = transform1(items)

    expect(results).toEqual(expectedResults)
  })
})