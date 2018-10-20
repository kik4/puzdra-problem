import { Field, NeighborChains } from "../types"
import get4NeighborChains from "../services/get4NeighborChains"

export default (field: Field): NeighborChains[] => {
  let result: NeighborChains[] = []
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      result = result.concat(get4NeighborChains(field, i, j))
    }
  }
  return result
}
