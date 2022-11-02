const fs = require('fs');

const clean = ['node_modules', 'app/dist', 'release/build', 'package-lock.json'];

switch (process.argv[2]) {
  case '--clean':
    clean.forEach((dir) => {
      fs.rmSync(dir, { recursive: true, force: true });
    });
    break;
  case '--dist':
    fs.rmSync('app/dist', { recursive: true, force: true });
    break;
  case '--build':
    fs.rmSync('release/build', { recursive: true, force: true });
    break;
  default:
    console.log('Empty action received');
}
