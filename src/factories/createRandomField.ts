import { Field, Box } from "../types"

export default function createRandomField(createRandomBox: Function): Field {
  const result = []
  for (let y = 0; y < 5; y++) {
    const line: Box[] = []
    for (let x = 0; x < 6; x++) {
      line.push(createRandomBox())
    }
    result.push(line)
  }
  return result
}
