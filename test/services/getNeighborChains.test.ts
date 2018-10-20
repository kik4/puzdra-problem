import { Field } from "../../src/types"
import getNeighborChains from "../../src/services/getNeighborChains"

describe("get4NeighborChains", () => {
  it("get4NeighborChains() checks", () => {
    const directions = ["up", "down", "left", "right", "downright"]
    const field: Field = [
      [1, 1, 4, 3, 1, 6],
      [1, 3, 4, 3, 1, 6],
      [2, 2, 3, 2, 3, 3],
      [1, 1, 4, 2, 1, 6],
      [1, 1, 4, 4, 1, 6],
    ]

    expect(getNeighborChains(field, 2, 2, directions)).toEqual([
      {
        chains: [{ axis: "x", length: 3, x: 1, y: 1 }, { axis: "y", length: 3, x: 2, y: 2 }],
        direction: "up",
        x: 2,
        y: 2,
      },
      { chains: [{ axis: "y", length: 3, x: 2, y: 0 }], direction: "down", x: 2, y: 2 },
      {
        chains: [
          { axis: "x", length: 3, x: 0, y: 2 },
          { axis: "x", length: 3, x: 3, y: 2 },
          { axis: "y", length: 3, x: 3, y: 0 },
        ],
        direction: "right",
        x: 2,
        y: 2,
      },
      { chains: [{ axis: "x", length: 4, x: 0, y: 2 }], direction: "downright", x: 2, y: 2 },
    ])
  })
})
