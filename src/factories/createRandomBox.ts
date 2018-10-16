import { Box } from "../types"

export default function createRandomBox(): Box {
  return Math.floor(Math.random() * 6) + 1
}
