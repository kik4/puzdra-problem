import ucCreateRandomField from "./usecases/ucCreateRandomField"
import ucGetChainPoints from "./usecases/ucGetChainPoints"
import outputPointsConsole from "./output/outputPointsConsole"
import outputFieldConsole from "./output/outputFieldConsole"

// problem 1
console.log("ランダムフィールド生成")
const field = ucCreateRandomField()
outputFieldConsole(field)
const points = ucGetChainPoints(field)
outputPointsConsole(points)
