const { build } = require('esbuild');
const { ENV, cwd } = require('../../utilities');

module.exports.buildNode = () =>
  build({
    bundle: true,
    define: { ...ENV },
    entryPoints: [cwd('src/index.ts')],
    outfile: cwd('.micra/index.js'),
    target: ['node14'],
    tsconfig: cwd('tsconfig.json'),
  }).then(() => {
    //
  });
