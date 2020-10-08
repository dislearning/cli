const clear = require('clear');

const title = require('./utils/title');

const menus = {
  main: `
    dislearning [command] <options>

    init ............... create a new dislearning project
    develop ............ alias for gatsby develop
    build .............. alias for gatsby build
    version ............ show package version
    help ............... show help menu for a command`,

  init: `
    dislearning init [name] <options>

    --template, -t ..... the template to use`,
}

module.exports = (args) => {
  clear();
  title();

  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)

  console.log();
}
