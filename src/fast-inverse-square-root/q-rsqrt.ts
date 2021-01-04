const threehalfs = 1.5
const bytes = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
const f32 = new Float32Array(bytes);
const u32 = new Uint32Array(bytes);

export function Q_rsqrt(number : number) {
  let i
  let x2, y

  x2 = number * 0.5
  y = number

  f32[0] = number                         // evil floating bit level hacking
  i = (0x5f3759df - (u32[0] >> 1));       // what the fuck?
  u32[0] = i
  y = f32[0]
  y  = y * (threehalfs - (x2 * y * y))    // 1st iteration
  // y  = y * (threehalfs - (x2 * y * y)) // 2nd iteration, this can be removed

  return y
}