import {transform} from 'babel-core'
import {formatStackTrace, separateMessageFromStack} from 'jest-util'

expect.extend({
  toBeValidSyntax(actual, expected) {
    let error
    try {
      transform(actual)
    } catch (e) {
      error = e
    }
    if (!error) {
      return {pass: true}
    }
    const {message, stack} = separateMessageFromStack(error.stack)
    return {
      pass: false,
      message: (
        this.utils.matcherHint('.toBeValidSyntax', 'codeString', '') + '\n\n' +
        `Expected valid syntax. But it was not.\n` +
        `Parsing the code in the string threw:\n` +
        this.utils.RECEIVED_COLOR(
          '  ' + message + formatStackTrace(stack, {
            noStackTrace: true,
            rootDir: process.cwd(),
            testRegex: '',
          })
        )
      )
    }
  }
})
