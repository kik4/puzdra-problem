import createRandomBox from "./createRandomBox"

describe("createRandomBox", () => {
  it("createRandomBox() to be 1 to 6", () => {
    const box = createRandomBox()
    expect(box).toBeGreaterThanOrEqual(1)
    expect(box).toBeLessThanOrEqual(6)
  })
})
