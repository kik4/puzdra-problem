import * as equal from "fast-deep-equal"
export type composedItem = {
  value: any
  count: number
}

export default (array: Array<any>): Array<composedItem> => {
  if (!array || !array.length) {
    return []
  }

  const result: Array<composedItem> = []
  result.push({ value: array[0], count: 1 })
  for (let i = 1; i < array.length; i++) {
    const prev = result[result.length - 1]
    if (equal(prev.value, array[i])) {
      prev.count++
    } else {
      result.push({ value: array[i], count: 1 })
    }
  }
  return result
}
