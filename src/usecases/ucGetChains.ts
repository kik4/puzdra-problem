import { Field, Chain } from "../types"
import getChains from "../services/getChains"

export default (field: Field): Chain[] => {
  return getChains(field)
}
