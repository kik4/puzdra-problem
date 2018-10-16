import composeArray, { composedItem } from "./composeArray"

describe("composeArray", () => {
  it("composeArray()", () => {
    const array = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4]
    const expected: composedItem[] = [
      { value: 1, count: 3 },
      { value: 2, count: 2 },
      { value: 3, count: 1 },
      { value: 4, count: 4 },
    ]
    expect(composeArray(array)).toEqual(expected)
  })
})
