import { Field } from "../../src/types"
import swapBoxies from "../../src/services/swapBoxies"

describe("swapBoxies", () => {
  it("swapBoxies() checks", () => {
    const field: Field = [[1, 2], [3, 4]]
    expect(swapBoxies(field, 0, 0, "up")).toEqual([[1, 2], [3, 4]])
    expect(swapBoxies(field, 0, 0, "down")).toEqual([[3, 2], [1, 4]])
    expect(swapBoxies(field, 0, 0, "left")).toEqual([[1, 2], [3, 4]])
    expect(swapBoxies(field, 0, 0, "right")).toEqual([[2, 1], [3, 4]])

    expect(swapBoxies(field, 1, 0, "up")).toEqual([[3, 2], [1, 4]])
    expect(swapBoxies(field, 1, 0, "down")).toEqual([[1, 2], [3, 4]])
    expect(swapBoxies(field, 1, 0, "left")).toEqual([[1, 2], [3, 4]])
    expect(swapBoxies(field, 1, 0, "right")).toEqual([[1, 2], [4, 3]])

    expect(swapBoxies(field, 0, 1, "up")).toEqual([[1, 2], [3, 4]])
    expect(swapBoxies(field, 0, 1, "down")).toEqual([[1, 4], [3, 2]])
    expect(swapBoxies(field, 0, 1, "left")).toEqual([[2, 1], [3, 4]])
    expect(swapBoxies(field, 0, 1, "right")).toEqual([[1, 2], [3, 4]])

    expect(swapBoxies(field, 1, 1, "up")).toEqual([[1, 4], [3, 2]])
    expect(swapBoxies(field, 1, 1, "down")).toEqual([[1, 2], [3, 4]])
    expect(swapBoxies(field, 1, 1, "left")).toEqual([[1, 2], [4, 3]])
    expect(swapBoxies(field, 1, 1, "right")).toEqual([[1, 2], [3, 4]])
  })
})
