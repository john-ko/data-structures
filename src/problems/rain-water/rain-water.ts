export function rain_water (nums: number[]) {
  let water = 0
  const length = nums.length
  const left = []
  const right = new Array(length)

  left[0] = nums[0]
  for (let i = 1; i < length; i++) {
    left.push(Math.max(left.at(-1) ?? 0, nums[i]))
  }

  // start from the right
  right[length - 1] = nums[length - 1]
  for (let i = length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], nums[i])
  }

  // now find min of each
  for (let i = 0; i < length; i++) {
    water += Math.min(right[i], left[i]) - nums[i]
  }

  return water
}