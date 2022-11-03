/* eslint-disable import/no-extraneous-dependencies */
import chalk from 'chalk';
import detectPort from 'detect-port';
import { port } from '../DevConfig.json';

detectPort(parseInt(port, 10), (err: unknown, availablePort: unknown) => {
  if (parseInt(port, 10) !== availablePort) {
    // eslint-disable-next-line no-console
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
