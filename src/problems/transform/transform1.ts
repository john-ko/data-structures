export default function transform1 (items: string[]): (string|string[])[] {
  return items.reduce((acc: (string|string[])[], item: string) => {
    let previous = acc[acc.length - 1]

    if (Array.isArray(previous) && item === previous[0]) {
      previous.push(item)
    } else if (item === previous) {
      acc[acc.length - 1] = [item, item]
    } else {
      acc.push(item)
    }

    return acc
  }, [])
}