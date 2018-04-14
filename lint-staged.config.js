module.exports = {
  concurrent: false,
  linters: {
    '.all-contributorsrc': [
      `kcd-scripts contributors generate`,
      'git add README.md',
    ],
  },
}
