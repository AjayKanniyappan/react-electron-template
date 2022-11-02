const chalk = require('chalk');
const detectPort = require('detect-port');
const { port } = require('../DevConfig.json');

detectPort(port, (err, availablePort) => {
  if (port !== String(availablePort)) {
    console.log(
      `${chalk.whiteBright.bold('⚠️  localhost port')} ${chalk.red.bold(
        port,
      )} ${chalk.whiteBright.bold(
        'already in use!!! please use another port. 👉 Ex: Change DevConfig port number✨',
      )} `,
    );
    process.exit(1);
  }
});
