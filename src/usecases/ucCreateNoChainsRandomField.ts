import { Field } from "../types"
import ucCreateRandomField from "./ucCreateRandomField"
import ucGetChains from "./ucGetChains"

export default (): Field => {
  let result: Field = null
  while (true) {
    result = ucCreateRandomField()
    if (!ucGetChains(result).length) {
      break
    }
  }
  return result
}
