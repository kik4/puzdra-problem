import { Field, Chain } from "../../src/types"
import getChains from "../../src/services/getChains"

describe("getChains", () => {
  it("getChains() checks", () => {
    const field: Field = [
      [1, 1, 1, 1, 2, 5],
      [1, 1, 1, 1, 2, 5],
      [2, 1, 1, 1, 2, 2],
      [2, 1, 1, 1, 2, 2],
      [2, 1, 1, 1, 2, 2],
    ]
    const expected: Chain[] = [
      { x: 0, y: 0, axis: "x", length: 4 },
      { x: 0, y: 1, axis: "x", length: 4 },
      { x: 1, y: 2, axis: "x", length: 3 },
      { x: 1, y: 3, axis: "x", length: 3 },
      { x: 1, y: 4, axis: "x", length: 3 },
      { x: 0, y: 2, axis: "y", length: 3 },
      { x: 1, y: 0, axis: "y", length: 5 },
      { x: 2, y: 0, axis: "y", length: 5 },
      { x: 3, y: 0, axis: "y", length: 5 },
      { x: 4, y: 0, axis: "y", length: 5 },
      { x: 5, y: 2, axis: "y", length: 3 },
    ]
    expect(getChains(field)).toEqual(expected)
  })
})
