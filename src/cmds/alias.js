const execa = require('execa');

async function runDevelop(args) {
  const proc = execa('gatsby', args, {
    stdout: process.stdout,
  });
  process.on("uncaughtException", proc.kill);
  process.on("SIGINT", proc.kill);
  process.on("SIGTERM", proc.kill);
  await proc;
  return;
}

module.exports = async (args) => {
  await runDevelop(args._);
  return true;
};

