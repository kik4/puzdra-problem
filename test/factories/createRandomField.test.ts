import createRandomField from "../../src/factories/createRandomField"
import createRandomBox from "../../src/factories/createRandomBox"

describe("createRandomField", () => {
  it("createRandomField()'s size to be 6x5", () => {
    const field = createRandomField(createRandomBox)
    expect(field).toHaveLength(5)
    field.forEach(line => {
      expect(line).toHaveLength(6)
    })
  })
})
