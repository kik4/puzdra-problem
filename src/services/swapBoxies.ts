import { Field } from "../types"
const deepcopy = require("deep-copy")

export default (field: Field, y: number, x: number, direction: string): Field => {
  const result = deepcopy(field)

  let nx = x
  let ny = y
  if (direction.includes("up")) {
    ny -= 1
  }
  if (direction.includes("down")) {
    ny += 1
  }
  if (direction.includes("left")) {
    nx -= 1
  }
  if (direction.includes("right")) {
    nx += 1
  }
  if (ny < 0 || ny > result.length - 1 || nx < 0 || nx > result[0].length - 1) {
    return result
  }
  const tmp = result[ny][nx]
  result[ny][nx] = result[y][x]
  result[y][x] = tmp
  return result
}
