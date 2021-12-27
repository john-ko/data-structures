
export function merge (intervals: number[][]): number[][] {
  intervals.sort((a: number[],b: number[]) => a[0] < b[0] ? -1: 1)
  return intervals.reduce((acc: number[][], interval) => {
    let previous = acc[acc.length - 1]
    const [start, stop] = interval
    let start_previous = start
    let stop_previous = stop

    if (!previous) {
      acc.push(interval)
      return acc
    }

    [start_previous, stop_previous] = previous
    // sp      s
    // [0,5], [1,4]
    // if one in range
    if (
      // start is within range of previous
      (start >= start_previous && start <= stop_previous) || 
      // stop is within range of previous
      (stop <= stop_previous && stop >= start_previous) || 
      // this wont happen since it is sorted by start
      // (start <= start_previous && stop >= stop_previous) ||
      (start >= start_previous && stop <= stop_previous)
    ) {
      // mutate last one and return
      previous[0] = Math.min(start, start_previous)
      previous[1] = Math.max(stop, stop_previous)
      return acc
    }

    if (start > start_previous && stop < stop_previous) {
      // just return
      return acc
    }

    acc.push(interval)

    return acc
  }, [])
}
