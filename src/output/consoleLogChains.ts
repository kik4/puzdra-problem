import { Chain } from "../types"

export default (chains: Chain[]) => {
  if (!chains.length) {
    console.log("no chains.")
    return
  }

  const sb = []
  chains.forEach(chain => {
    sb.push(`{${chain.x},${chain.y},${chain.axis},${chain.length}}`)
  })
  console.log(sb.join(", "))
}
