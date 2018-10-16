import ucCreateRandomField from "./usecases/ucCreateRandomField"
import ucGetChains from "./usecases/ucGetChains"
import consoleLogField from "./output/consoleLogField"
import consoleLogChains from "./output/consoleLogChains"

// problem 1
console.log("ランダムフィールド生成")
const field = ucCreateRandomField()
consoleLogField(field)
const chains = ucGetChains(field)
consoleLogChains(chains)
