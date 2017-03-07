const path = require('path')
const replace = require('replace-in-file')

const [, , email] = process.argv

if (!email) {
  throw new Error('You must provide an email address as an argument')
}

const glob = path.join(__dirname, '..', 'exercises/*.js')

const options = {files: [glob], from: /&em=/, to: `&em=${email}`}

replace(options).then(
  changedFiles => {
    console.log(`Updated ${changedFiles.length} with the email ${email}`)
  },
  error => {
    console.error('Failed to update files')
    console.error(error.stack)
  }
)
