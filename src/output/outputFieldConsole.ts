import { Field } from "../types"

export default function outputFieldConsole(field: Field) {
  field.forEach(line => {
    console.log(line.join(" "))
  })
}
