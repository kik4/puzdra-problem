import createRandomField from "../factories/createRandomField"
import createRandomBox from "../factories/createRandomBox"
import { Field } from "../types"

export default function ucCreateRandomField(): Field {
  return createRandomField(createRandomBox)
}
