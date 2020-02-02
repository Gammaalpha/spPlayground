const concat = require('concat');

(async function build() {
  const files = [
    './dist/SpPlayground/runtime.js',
    './dist/SpPlayground/polyfills.js',
    './dist/SpPlayground/scripts.js',
    './dist/SpPlayground/main.js'
  ];
  await concat(files, './dist/SpPlayground/bundle.js');
})();
