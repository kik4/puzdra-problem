import { Point } from "../types"

export default (points: Point[]) => {
  const sb = []
  points.forEach(point => {
    sb.push(`{${point.x},${point.y}}`)
  })
  console.log(sb.join(""))
}
