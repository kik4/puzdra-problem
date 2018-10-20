export type Box = number

// [y][x]
export type Field = Box[][]

export type Chain = {
  x: number
  y: number
  axis: string
  length: number
}

export type NeighborChains = {
  direction: string
  x: number
  y: number
  chains: Chain[]
}
