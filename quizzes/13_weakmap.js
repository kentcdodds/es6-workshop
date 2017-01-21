function weakMapInfo() {
  // what will this return?
  const obj = {iHaveYouNow: true}
  const weakMap = new WeakMap([
    [{iDoNotHaveYouEver: true}, true],
    [obj, 'saweet'],
  ])
  return {
    size: weakMap.size,
    objValue: weakMap.get(obj),
    values: weakMap.values,
    keys: weakMap.keys,
    entries: weakMap.entries,
  }
}
// console.log(weakMapInfo())
