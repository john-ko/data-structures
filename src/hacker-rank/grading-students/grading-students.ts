const FAILING_GRADE_MINIMUM = 38
export default function gradingStudents (grades: number[]): number[] {
  return grades.map(g => grade(g))
}

export function grade (grade: number): number {
  if (grade < FAILING_GRADE_MINIMUM) {
    return grade
  }

  const onesDigit = grade % 10
  let delta = onesDigit

  if (onesDigit >= 8) {
    // selects 8, 9: round up to nearest 10
    delta = 10
  } else if (onesDigit >= 3 && onesDigit < 5) {
    // chose 3, 4: round up to nearest 5
    delta = 5
  }

  return grade - onesDigit + delta
}