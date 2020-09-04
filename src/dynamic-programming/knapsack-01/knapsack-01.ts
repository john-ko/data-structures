export interface item {
  weight: number
  value: number
}

export function knapsack01 (items: item[], maxWeight: number) {
  const matrix: number[][] = []

  items.forEach((item, i) => {
    const row = []

    for(let j = 0; j <= maxWeight; j++) {
      const above = matrix[i - 1]?.[j] ?? 0
      const current = item.value + (matrix[i - 1]?.[j - item.weight] ?? 0)

      if (j < item.weight) {
        row.push(above || 0)

        continue
      }

      row.push(Math.max(above, current))
    }

    matrix.push(row)
  })


  return matrix[items.length - 1][maxWeight]
}
