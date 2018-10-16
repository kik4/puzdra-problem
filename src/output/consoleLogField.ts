import { Field } from "../types"

export default (field: Field) => {
  field.forEach(line => {
    console.log(line.join(" "))
  })
}
