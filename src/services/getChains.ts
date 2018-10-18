import { Field, Chain } from "../types"
import { compress } from "array-compressor"
import transpose from "../core/transpose"

export default (field: Field): Chain[] => {
  const result: Chain[] = []

  // x-scan
  const ylength = field.length
  for (let y = 0; y < ylength; y++) {
    const line = field[y]
    const composed = compress(line)
    let index = 0
    composed.forEach(v => {
      if (v.count >= 3) {
        result.push({ x: index, y, axis: "x", length: v.count })
      }
      index += v.count
    })
  }

  // y-scan
  const filedT = transpose(field)
  const xlength = field[0].length
  for (let x = 0; x < xlength; x++) {
    const line = filedT[x]
    const composed = compress(line)
    let index = 0
    composed.forEach(v => {
      if (v.count >= 3) {
        result.push({ x, y: index, axis: "y", length: v.count })
      }
      index += v.count
    })
  }

  return result
}
