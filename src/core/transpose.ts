export default (a: Array<Array<any>>): Array<Array<any>> => a[0].map((_, c) => a.map(r => r[c]))
