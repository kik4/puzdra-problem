import { Field, Point } from "../types"
import composeArray from "../core/composeArray"
import transpose from "../core/transpose"

export default function getChainPoints(field: Field): Point[] {
  const result: Point[] = []

  // x-scan
  const ylength = field.length
  for (let y = 0; y < ylength; y++) {
    const line = field[y]
    const composed = composeArray(line)
    let index = 0
    composed.forEach(v => {
      if (v.count >= 3) {
        result.push({ x: index, y })
      }
      index += v.count
    })
  }

  // y-scan
  const filedT = transpose(field)
  const xlength = field[0].length
  for (let x = 0; x < xlength; x++) {
    const line = filedT[x]
    const composed = composeArray(line)
    let index = 0
    composed.forEach(v => {
      if (v.count >= 3) {
        result.push({ x, y: index })
      }
      index += v.count
    })
  }

  return result
}
