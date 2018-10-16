import ucCreateRandomField from "./usecases/ucCreateRandomField"
import ucGetChains from "./usecases/ucGetChains"
import consoleLogField from "./output/consoleLogField"
import consoleLogChains from "./output/consoleLogChains"
import ucCreateNoChainsRandomField from "./usecases/ucCreateNoChainsRandomField"

// problem 1
console.log("ランダムフィールド生成")
const field = ucCreateRandomField()
consoleLogField(field)
const chains = ucGetChains(field)
consoleLogChains(chains)

// problem 2
console.log("連鎖なしランダムフィールド生成")
const ncfield = ucCreateNoChainsRandomField()
consoleLogField(ncfield)
