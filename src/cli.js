const minimist = require('minimist');
const chalk = require('chalk');

const getCommand = (args) =>
  args.version || args.v ? 'version' :
    args.help || args.h ? 'help' :
      args._[0] || 'help';

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = getCommand(args)

  switch (cmd) {
    case 'init':
      require('./cmds/init')(args);
      break;

    case 'develop':
      require('./cmds/alias')(args);
      break;

    case 'build':
      require('./cmds/alias')(args);
      break;

    case 'version':
      require('./cmds/version')(args);
      break;

    case 'help':
      require('./cmds/help')(args);
      break;

    default:
      console.error(chalk.red(`"${cmd}" is not a valid command!`));
      break;
  }
}
