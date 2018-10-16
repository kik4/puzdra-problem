import { Box } from "../types"
import { boxValues } from "../definitions"

export default (): Box => {
  return boxValues[Math.floor(Math.random() * boxValues.length)]
}
