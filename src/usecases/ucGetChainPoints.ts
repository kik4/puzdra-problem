import { Field, Point } from "../types"
import getChainPoints from "../services/getChainPoints"

export default function ucGetChainPoints(field: Field): Point[] {
  return getChainPoints(field)
}
