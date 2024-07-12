#!/usr/bin/env node

var mediacrush = require('mediacrush');
var argv = require('minimist')(process.argv.slice(2));

if (argv.v || argv.version) {
  process.stdout.write(require('../package.json').version);
  process.stdout.write('\n');
  return;
}
else if (argv.h || argv.help || !argv._[0]) {
  process.stdout.write('Usage:\n');
  process.stdout.write('  crush <url>\n');
  process.stdout.write('  crush -h || --help\n');
  process.stdout.write('  crush -v || --version\n');
  process.stdout.write('\n');
  process.stdout.write('Options:\n');
  process.stdout.write('  -h --help     Show this screen.\n');
  process.stdout.write('  -v --version  Show version.\n');
  return;
}

mediacrush.uploadURL(argv._[0], function(err, data) {
  if (err) {
    throw err;
  }
  process.stdout.write('https://mediacru.sh/' + data.hash);
  process.stdout.write('\n');
});