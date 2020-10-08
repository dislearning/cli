const clear = require('clear');
const chalk = require('chalk');
const Listr = require('listr');
const { projectInstall } = require('pkg-install');
const execa = require('execa');
const { Input } = require('enquirer');

const title = require('./utils/title');

async function cloneTemplate(name, template) {
  const result = await execa('git', ['clone', `https://github.com/${template}.git`, name]);
  if (result.failed) {
    return Promise.reject(new Error('Failed to clone the template'));
  }
  return;
}

module.exports = async (args) => {
  clear();
  title();

  const template = args.template || 'dislearning/dislearning';
  let name = args._[1];

  if (!name) {
    const prompt = new Input({
      message: 'Enter the project name (it will be the project folder):',
      initial: 'project-name',
      validate: (value) => !!value.length,
    });
    name = await prompt.run();
  }

  const task = new Listr([
    {
      title: 'Clone template',
      task: () => cloneTemplate(name, template),
    },
    {
      title: 'Install dependencies',
      task: () =>
        projectInstall({
          cwd: name
        }),
    }
  ]);

  await task.run();

  console.log(chalk.green(`
  For a quick start:

  cd ${name}
  dislearning develop`));

  console.log();
  return true;
};

