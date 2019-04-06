const main = require('../lib')

const argv = require('yargs')
  .version()
  .option('d', {
    alias: 'file',
    default: './',
    describe: 'the directory you want to watch',
  })
  .option('p', {
    alias: 'port',
    default: '3000',
    describe: 'the port you want to use',
  })

  main({
    port: argv.d,
    directory: argv.p
  })
