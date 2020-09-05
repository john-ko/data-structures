
export function lcsRecursive (s1: string, s2: string): number {
  if (s1 === '' || s2 === '') {
    return 0
  }

  if (lastChar(s1) === lastChar(s2)) {
    return 1 + lcsRecursive(substr(s1), substr(s2))
  }

  return Math.max(
    lcsRecursive(s1, substr(s2)),
    lcsRecursive(substr(s1), s2),
  )
}

export function lscTable (s1: string, s2: string): number {
  const matrix: number[][] = []

  for (let i = 0; i < s1.length; i++) {
    const row: number[] = []
    const c1 = s1[i]

    for (let j = 0; j < s2.length; j++) {
      const c2 = s2[j]

      if (c1 === c2) {
        row.push((matrix[i - 1]?.[j - 1] ?? 0) + 1)
        continue
      }

      row.push(
        Math.max(
          row[row.length - 1] ?? 0,
          matrix[i - 1]?.[j] ?? 0,
        )
      )
    }

    matrix.push(row)
  }

  return matrix[s1.length - 1][s2.length - 1]
}

export function substr (str: string): string {
  return str.substring(0, str.length - 1)
}

export function lastChar (str: string): string {
  return str.charAt(str.length - 1)
}