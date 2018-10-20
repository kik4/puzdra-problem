import { Field, NeighborChains } from "../types"
import getNeighborChains from "../services/getNeighborChains"

export default (field: Field): NeighborChains[] => {
  const directions = ["upleft", "up", "upright", "left", "right", "downleft", "down", "downright"]

  let result: NeighborChains[] = []
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      result = result.concat(getNeighborChains(field, i, j, directions))
    }
  }
  return result
}
