import { rain_water } from './rain-water'

describe('rain-water', () => {
  it('base case', () => {
    const answer = rain_water([2,0,2])
    expect(answer).toBe(2)
  })

  /**
   * []     []
   * []     []
   * [][] [][]
   * [][]_[][]
   * answer: 8
   */
  it('has a bowl shape', () => {
    const answer = rain_water([4, 2, 0, 2, 4])
    expect(answer).toBe(8)
  })

  /**
   *    []
   *    []
   * [] [] []
   * []_[]_[]
   * answer: 4
   */
  it('has a psi shape', () => {
    const answer = rain_water([2, 0, 4, 0, 2])
    expect(answer).toBe(4)
  })
})
