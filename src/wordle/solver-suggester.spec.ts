import {
  is_type_higher_or_lower_priority,
  Letter
} from './solver-suggester'

describe('solver suggester', () => {
  describe('is_type_higher_or_lower_priority', () => {
    it('selects green when compared with grey', () => {
      const l1: Letter = {
        letter: 'a',
        type: 'GREY'
      }
      const l2: Letter = {
        letter: 'a',
        type: 'GREEN'
      }

      let l3 = is_type_higher_or_lower_priority(l1, l2)
      expect(l3).toEqual(l2)
    })

    it('selects green when compared with yellow', () => {
      const l1: Letter = {
        letter: 'a',
        type: 'YELLOW'
      }
      const l2: Letter = {
        letter: 'a',
        type: 'GREEN'
      }

      let l3 = is_type_higher_or_lower_priority(l1, l2)
      expect(l3).toEqual(l2)
    })

    it('selects yellow when compared with grey', () => {
      const l1: Letter = {
        letter: 'a',
        type: 'YELLOW'
      }
      const l2: Letter = {
        letter: 'a',
        type: 'GREY'
      }

      let l3 = is_type_higher_or_lower_priority(l1, l2)
      expect(l3).toEqual(l1)
    })
  })
})