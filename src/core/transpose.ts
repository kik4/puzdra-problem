export default <T = any>(a: Array<Array<T>>): Array<Array<T>> => a[0].map((_, c) => a.map(r => r[c]))
