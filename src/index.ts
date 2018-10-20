import ucCreateRandomField from "./usecases/ucCreateRandomField"
import ucGetChains from "./usecases/ucGetChains"
import consoleLogField from "./output/consoleLogField"
import consoleLogChains from "./output/consoleLogChains"
import ucCreateNoChainsRandomField from "./usecases/ucCreateNoChainsRandomField"
import ucGet4NeighborChains from "./usecases/ucGet4NeighborChains"
import consoleLogNeighborChains from "./output/consoleLogNeighborChains"
import ucGet8NeighborChains from "./usecases/ucGet8NeighborChains"

// 縦5横6、数値は1から6のフィールド

/**
 * Problem 1
 * ランダムなフィールドを生成し、
 * 縦もしくは横に3つ以上同じ値が並ぶ組み合わせを全て列挙
 *  */
console.log("ランダムフィールド生成")
const field = ucCreateRandomField()
consoleLogField(field)
const chains = ucGetChains(field)
consoleLogChains(chains)

/**
 * Problem 2
 * 3つ以上並ぶ組み合わせが存在しないフィールドを生成
 */
console.log("連鎖なしランダムフィールド生成")
const ncfield = ucCreateNoChainsRandomField()
consoleLogField(ncfield)

/**
 * Problem 3
 * 2の状態から、縦横隣接する数値を一つ入れ替えて3つ以上並ぶ組み合わせを全て列挙
 */
console.log("4近傍連鎖調査")
const chains4n = ucGet4NeighborChains(ncfield)
consoleLogNeighborChains(chains4n)

/**
 * Problem 4
 * 3に加えて斜め隣接も含めて全て列挙
 */
console.log("8近傍連鎖調査")
const chains8n = ucGet8NeighborChains(ncfield)
consoleLogNeighborChains(chains8n)
