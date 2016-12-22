var execSync = require('child_process').execSync

var desiredVersions = {
  yarn: '0.17.10',
  node: '6.0.0',
  npm: '4.0.3',
}

var errors = {
  noYarn: {
    message: 'You do not have yarn installed. This is a package manager client that installs from the regular npm ' +
      'registry, but ensures you get the same versions of all dependencies required for this repository. ' +
      'It is highly recommended that you install yarn: `npm install --global yarn` (learn more: https://yarnpkg.com/)',
    isProblem: false,
  },
  oldYarn: {
    getMessage: function(desired, actual) {
      return 'Your version of yarn (' + actual + ') is older than the recommended version of ' + desired + '. ' +
        'Run `yarn self-update` (or `npm install --global yarn@latest`) to update.'
    },
    isProblem: false,
  },
  oldNode: {
    getMessage: function(desired, actual) {
      return 'Your version of node (' + actual + ') is older than the recommended version of ' + desired + '. ' +
        'Please install a more recent version. You can use http://git.io/nvm or https://github.com/coreybutler/nvm-windows ' +
        'to make upgrading your version of node easier.'
    },
    isProblem: false,
  },
  oldNpm: {
    getMessage: function(desired, actual) {
      return 'Your version of npm (' + actual + ') is older than the recommended version of ' + desired + '. ' +
      'You should install yarn anyway, but if you would rather use npm, please at least have a more recent version. ' +
      'You can install the latest version by running `npm install --global npm@latest`.'
    },
    isProblem: false,
  },
}

var nodeVersion = process.versions.node
errors.oldNode.isProblem = !versionIsGreater(desiredVersions.node, nodeVersion)
errors.oldNode.message = errors.oldNode.getMessage(desiredVersions.node, nodeVersion)

try {
  var yarnVersion = execSync('yarn --version').toString().trim()
  errors.oldYarn.isProblem = !versionIsGreater(desiredVersions.yarn, yarnVersion)
  errors.oldYarn.message = errors.oldYarn.getMessage(desiredVersions.yarn, yarnVersion)
} catch (e) {
  errors.noYarn.isProblem = true
  var npmVersion = execSync('npm --version').toString().trim()
  errors.oldNpm.isProblem = !versionIsGreater(desiredVersions.npm, npmVersion)
  errors.oldNpm.message = errors.oldNpm.getMessage(desiredVersions.npm, npmVersion)
}

var systemErrors = Object.keys(errors)
  .filter(function(key) { return errors[key].isProblem })

var errorCount = systemErrors.length

if (errorCount) {
  var errorMessage = systemErrors
    .reduce(function(messages, key) {
      messages.push('  - ' + errors[key].message)
      return messages
    }, [])
    .join('\n')
  var one = errorCount === 1

  console.error(
    'There ' + (one ? 'is an issue' : 'are some issues') + ' with your system. ' +
    'It is quite likely that if you do not resolve these, you will have a hard time running this repository.\n' +
    errorMessage
  )
  console.info('If you don\'t care about these warnings, go ahead and install dependencies with `node ./scripts/install`')
  process.exitCode = 1
}

// returns actualVersion >= desiredVersion
function versionIsGreater(desiredVersion, actualVersion) {
  var desiredVersions = /v?(\d+)\.(\d+)\.(\d+)/.exec(desiredVersion)
  var desiredMajor = Number(desiredVersions[1]), desiredMinor = Number(desiredVersions[2]), desiredPatch = Number(desiredVersions[3])
  var actualVersions = /v?(\d+)\.(\d+)\.(\d+)/.exec(actualVersion)
  var actualMajor = Number(actualVersions[1]), actualMinor = Number(actualVersions[2]), actualPatch = Number(actualVersions[3])
  if (actualMajor < desiredMajor) {
    return false
  } else if (actualMajor > desiredMajor) {
    return true
  }
  if (actualMinor < desiredMinor) {
    return false
  } else if (actualMinor > desiredMinor) {
    return true
  }
  if (actualPatch < desiredPatch) {
    return false
  } else if (actualPatch > desiredPatch) {
    return true
  }
  // by this point they should be equal
  return true
}
