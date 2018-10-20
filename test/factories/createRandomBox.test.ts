import createRandomBox from "../../src/factories/createRandomBox"
import { boxValues } from "../../src/definitions"

describe("createRandomBox", () => {
  it("createRandomBox() is in boxValues", () => {
    const box = createRandomBox()
    expect(boxValues).toContain(box)
  })
})
