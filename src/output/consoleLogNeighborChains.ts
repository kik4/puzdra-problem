import { NeighborChains } from "../types"

export default (nchains: NeighborChains[]) => {
  if (!nchains.length) {
    console.log("no neighbor chains.")
    return
  }

  const sb = []
  nchains.forEach(nchain => {
    const sb2 = []
    sb2.push(`{${nchain.x},${nchain.y},${nchain.direction}} -> `)
    const sb3 = []
    nchain.chains.forEach(chain => {
      sb3.push(`{${chain.x},${chain.y},${chain.axis},${chain.length}}`)
    })
    sb2.push(sb3.join(", "))
    sb.push(sb2.join(""))
  })
  console.log(sb.join("\n"))
}
