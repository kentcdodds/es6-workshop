module.exports = {
  concurrent: false,
  ignore: ['**/exercises/**', '**/exercises-final/**'],
  linters: {
    '.all-contributorsrc': [
      `kcd-scripts contributors generate`,
      'git add README.md',
    ],
    '**/*.+(js|json|less|css|ts|tsx|md)': [
      'kcd-scripts format',
      `kcd-scripts lint`,
      'git add',
    ],
  },
}
