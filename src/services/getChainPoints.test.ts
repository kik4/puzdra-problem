import { Field, Point } from "../types"
import getChainPoints from "./getChainPoints"

describe("getChainPoints", () => {
  it("getChainPoints() checks", () => {
    const field: Field = [
      [1, 1, 1, 1, 2, 5],
      [1, 1, 1, 1, 2, 5],
      [2, 1, 1, 1, 2, 2],
      [2, 1, 1, 1, 2, 2],
      [2, 1, 1, 1, 2, 2],
    ]
    const expected: Point[] = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: 0, y: 2 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 2 },
    ]
    expect(getChainPoints(field)).toEqual(expected)
  })
})
