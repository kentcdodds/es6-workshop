/* eslint no-case-declarations:0 */
import path from 'path'
import chokidar from 'chokidar'
import chalk from 'chalk'
import {sync as globSync} from 'glob'

let lastFileRun = null

const cwd = __dirname
const watcher = watchFiles()
clearConsole()
sayWatching()
sayCommands()
listenForInput()

function watchFiles() {
  return chokidar.watch('*_*.js', {cwd, ignoreInitial: true}).on('change', relativePath => {
    rerunFile(relativePath)
  })
}

function listenForInput() {
  process.stdin.setEncoding('utf8')
  process.stdin.on('data', text => {
    /* eslint complexity:0 */
    const input = text.trim()
    
    switch (input) {
      case 'clear':
      case 'c':
        clearConsole()
        sayWatching()
        break
      case 'quit':
      case 'q':
        watcher.close()
        process.stdin.pause()
        break
      case '':
        if (lastFileRun) {
          rerunFile(lastFileRun)
        } else {
          console.log(chalk.gray('No quiz file has been run yet. Enter a glob pattern or change a file first.'))
        }
        break
      default:
        const [relativePathOfFirstMatchingFile] = globSync(`*${input}*`, {cwd})
        rerunFile(relativePathOfFirstMatchingFile)
    }
  })
}

function rerunFile(relativePath) {
  lastFileRun = relativePath
  const fullPath = path.resolve(cwd, relativePath)
  console.log('\n\n\n')
  console.log(chalk.gray(relativePath))

  try {
    delete require.cache[fullPath]
    require(fullPath) // eslint-disable-line global-require
  } catch (e) {
    console.error(chalk.red(getRelevantStackTrace(e)))
  }
}

function clearConsole() {
  console.log('\x1Bc')
}

function sayWatching() {
  console.log(chalk.gray('watching for a quiz change'))
}

function sayCommands() {
  console.log(chalk.gray(`You can enter a few handy commands here:
    q, quit     Quit the quizzes
    c, clear    Clear the console
    filename    Run the first file that matches your pattern
    <enter>     Re-run the last run file\n`))
}

function getRelevantStackTrace({stack}) {
  const splitStack = stack.split('\n')
  const newStack = [splitStack[0]] // skip the first line which is the error message
  for (let i = 1; i < splitStack.length; i++) {
    const line = splitStack[i]
    if (line.includes(cwd)) {
      newStack.push(line)
    } else {
      newStack.push('    etc...')
      break
    }
  }
  return newStack.join('\n')
}
