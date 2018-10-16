import ucCreateRandomField from "./usecases/ucCreateRandomField"
import ucGetChains from "./usecases/ucGetChains"
import outputChainsConsole from "./output/outputChainsConsole"
import outputFieldConsole from "./output/outputFieldConsole"

// problem 1
console.log("ランダムフィールド生成")
const field = ucCreateRandomField()
outputFieldConsole(field)
const points = ucGetChains(field)
outputChainsConsole(points)
