import prettyFormat from 'pretty-format'
export default log

function log(...objs) {
  if (!objs.length) {
    return
  }
  const formattedObjs = objs.reduce((newArray, obj) => {
    newArray.push(prettyFormat(obj), '\n')
    return newArray
  }, [])
  console.log(...formattedObjs)
}
