import createRandomField from "../factories/createRandomField"
import createRandomBox from "../factories/createRandomBox"
import getChains from "../services/getChains"
import { Field } from "../types"

export default (): Field => {
  let result: Field = null
  while (true) {
    result = createRandomField(createRandomBox)
    if (!getChains(result).length) {
      break
    }
  }
  return result
}
