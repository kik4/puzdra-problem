import createRandomField from "../factories/createRandomField"
import createRandomBox from "../factories/createRandomBox"
import { Field } from "../types"

export default (): Field => {
  return createRandomField(createRandomBox)
}
