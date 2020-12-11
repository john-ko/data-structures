export function transform1 (items: string[]): string[][] {
  return items.reduce((acc: string[][], item: string) => {
    let previous: string[] = acc[acc.length - 1] || []

    if (item === previous[0]) {
      previous.push(item)
    } else {
      acc.push([item])
    }

    return acc
  }, [])
}

export function transform2 (items: string[]): string[][] {
  return items.reduce((acc: string[][], item) => {

    return acc
  }, [])
}