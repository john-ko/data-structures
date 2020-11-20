import gradingStudents, { grade } from './grading-students'

describe('grading-students', () => {
  describe('gradingStudents()', () => {
    const grades = [75, 67, 40, 33]

    expect(gradingStudents(grades)).toEqual([75,67,40,33])
  })

  describe('grade()', () => {
    it('rounds up to the nearest multiple of 5 if its less than 3', () => {
      expect(grade(83)).toEqual(85)
      expect(grade(84)).toEqual(85)

      expect(grade(88)).toEqual(90)
      expect(grade(89)).toEqual(90)
    })

    it('does nothing if grade is not less than closest multiple of 5', () => {
      expect(grade(51)).toEqual(51)
      expect(grade(52)).toEqual(52)

      expect(grade(56)).toEqual(56)
      expect(grade(57)).toEqual(57)
    })

    it ('If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.', () => {
      // when grade is less than 38
      const studentGrade = 37

      // no rounding will occur
      const result = grade(studentGrade)

      expect(result).toEqual(37)
    })
  })
})