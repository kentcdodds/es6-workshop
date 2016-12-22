var cp = require('child_process')
var spawn = cp.spawn, execSync = cp.execSync

var useYarn = false
try {
  useYarn = !!execSync('yarn --version')
} catch (e) {
  // use npm instead :-(
}

var installer = useYarn ? 'yarn' : 'npm'

console.log('\n📦  Installing dependencies via `' + installer + ' install`')

spawn(installer, ['install'], {stdio: 'inherit', shell: true})
