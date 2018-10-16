export type Box = number

// [y][x]
export type Field = Box[][]

// [y, x]
export type Chain = {
  x: number
  y: number
  axis: string
  length: number
}
