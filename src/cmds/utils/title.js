const chalk = require('chalk');
const figlet = require('figlet');

module.exports = () => {
  console.log(
    chalk.yellow(
      figlet.textSync('DisLearning', { horizontalLayout: 'full' })
    )
  );
};
