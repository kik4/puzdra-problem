import ucCreateRandomField from "./usecases/ucCreateRandomField"
import ucGetChains from "./usecases/ucGetChains"
import consoleLogField from "./output/consoleLogField"
import consoleLogChains from "./output/consoleLogChains"
import ucCreateNoChainsRandomField from "./usecases/ucCreateNoChainsRandomField"

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
