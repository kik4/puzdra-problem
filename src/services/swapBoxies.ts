import { Field } from "../types"
const deepcopy = require("deep-copy")

export default (field: Field, y: number, x: number, direction: string): Field => {
  const result = deepcopy(field)
  switch (direction) {
    case "up": {
      if (y <= 0) return result
      const tmp = result[y][x]
      result[y][x] = result[y - 1][x]
      result[y - 1][x] = tmp
      return result
    }
    case "down": {
      if (y >= result.length - 1) return result
      const tmp = result[y][x]
      result[y][x] = result[y + 1][x]
      result[y + 1][x] = tmp
      return result
    }
    case "left": {
      if (x <= 0) return result
      const tmp = result[y][x]
      result[y][x] = result[y][x - 1]
      result[y][x - 1] = tmp
      return result
    }
    case "right": {
      if (x >= result[0].length - 1) return result
      const tmp = result[y][x]
      result[y][x] = result[y][x + 1]
      result[y][x + 1] = tmp
      return result
    }
  }
  return result
}
