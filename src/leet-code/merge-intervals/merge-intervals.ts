
export function merge_interval (intervals: number[][]): number[][] {
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
    if ((start >= start_previous && start <= stop_previous) || 
        (stop <= stop_previous && stop >= start_previous) || 
        (start <= start_previous && stop >= stop_previous) ||
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


const test = [[1,4],[0,1]]

console.log(merge_interval(test))
// console.log(merge_interval([[0,0],[1,4]]))