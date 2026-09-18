import {spawnSync} from 'node:child_process';

const result = spawnSync(
  process.execPath,
  ['node_modules/@angular/compiler-cli/bundles/src/bin/ngc.js', '-p', 'invalid/tsconfig.json'],
  {encoding: 'utf8'},
);

const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;

if (result.status === 0) {
  console.error('Expected the misspelled output binding to fail, but compilation succeeded.');
  process.exit(1);
}

if (!output.includes('NG8030') || !output.includes('saveClik')) {
  console.error('Compilation failed without the expected NG8030/saveClik diagnostic.');
  console.error(output);
  process.exit(1);
}

console.log('PASS: the invalid fixture failed with NG8030 for saveClik.');
