import prettyFormat from 'pretty-format'
import chalk from 'chalk'

export default log
export {formatLog}

function log(...objs) {
  if (!objs.length) {
    return
  }
  let thingToDir = objs
  if (objs.length === 1) {
    [thingToDir] = objs
  }
  if (typeof thingToDir === 'string') {
    formatLog(chalk.green(thingToDir))
    return
  }
  console.dir(thingToDir, {depth: null, colors: true})
}

function formatLog(...objs) {
  if (!objs.length) {
    return
  }
  const formattedObjs = objs.reduce((newArray, obj) => {
    newArray.push(prettyFormat(obj), '\n')
    return newArray
  }, [])
  console.log(...formattedObjs)
}
