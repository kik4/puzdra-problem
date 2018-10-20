import { Field, NeighborChains } from "../types"
import swapBoxies from "./swapBoxies"
import getChains from "./getChains"

export default (field: Field, y: number, x: number): NeighborChains[] => {
  let result: NeighborChains[] = []
  const directions = ["up", "down", "left", "right"]

  directions.forEach(direction => {
    const temp = swapBoxies(field, y, x, direction)
    const chains = getChains(temp)
    if (!chains.length) {
      return
    }
    result = result.concat({ x, y, direction, chains })
  })
  return result
}
