import createRandomBox from "./createRandomBox"
import { boxValues } from "../definitions"

describe("createRandomBox", () => {
  it("createRandomBox() is in boxValues", () => {
    const box = createRandomBox()
    expect(boxValues).toContain(box)
  })
})
