import { merge } from './merge-intervals'

describe('merge-interval', () => {
  describe('[[1,4],[0,1]]', () => {
    it('returns [[0,4]]', () => {
      expect(merge([[1,4],[0,1]])).toEqual([[0,4]])
    })
  })

  describe('[[0,0],[1,4]]', () => {
    it('returns [[0,0],[1,4]]', () => {
      expect(merge([[0,0],[1,4]])).toEqual([[0,0],[1,4]])
    })
  })
})