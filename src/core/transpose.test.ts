import transpose from "./transpose"

describe("transpose", () => {
  it("transpose()", () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    expect(transpose(array)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  })
})
