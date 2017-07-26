'use strict';

// Do this as the first thing so that any code reading it knows the right env.

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', function (err) {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

var path = require('path');
var chalk = require('chalk');
var fs = require('fs-extra');
var webpack = require('webpack');
var config = require('../config/webpack.config.prod');
var paths = require('../config/paths');
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
var formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
var printHostingInstructions = require('react-dev-utils/printHostingInstructions');
var FileSizeReporter = require('react-dev-utils/FileSizeReporter');

var measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
var printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
var useYarn = fs.existsSync(paths.yarnLockFile);

// These sizes are pretty large. We'll warn for bundles exceeding them.
var WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
var WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.appBuild).then(function (previousFileSizes) {
  // Remove all content but keep the directory so that
  // if you're in it, you don't end up in Trash
  fs.emptyDirSync(paths.appBuild);
  // Merge with the public folder
  copyPublicFolder();
  // Start the webpack build
  return build(previousFileSizes);
}).then(function (_ref) {
  var stats = _ref.stats,
      previousFileSizes = _ref.previousFileSizes,
      warnings = _ref.warnings;

  if (warnings.length) {
    console.log(chalk.yellow('Compiled with warnings.\n'));
    console.log(warnings.join('\n\n'));
    console.log('\nSearch for the ' + chalk.underline(chalk.yellow('keywords')) + ' to learn more about each warning.');
    console.log('To ignore, add ' + chalk.cyan('// eslint-disable-next-line') + ' to the line before.\n');
  } else {
    console.log(chalk.green('Compiled successfully.\n'));
  }

  console.log('File sizes after gzip:\n');
  printFileSizesAfterBuild(stats, previousFileSizes, paths.appBuild, WARN_AFTER_BUNDLE_GZIP_SIZE, WARN_AFTER_CHUNK_GZIP_SIZE);
  console.log();

  var appPackage = require(paths.appPackageJson);
  var publicUrl = paths.publicUrl;
  var publicPath = config.output.publicPath;
  var buildFolder = path.relative(process.cwd(), paths.appBuild);
  printHostingInstructions(appPackage, publicUrl, publicPath, buildFolder, useYarn);
}, function (err) {
  console.log(chalk.red('Failed to compile.\n'));
  console.log((err.message || err) + '\n');
  process.exit(1);
});

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  console.log('Creating an optimized production build...');

  var compiler = webpack(config);
  return new Promise(function (resolve, reject) {
    compiler.run(function (err, stats) {
      if (err) {
        return reject(err);
      }
      var messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (process.env.CI && (typeof process.env.CI !== 'string' || process.env.CI.toLowerCase() !== 'false') && messages.warnings.length) {
        console.log(chalk.yellow('\nTreating warnings as errors because process.env.CI = true.\n' + 'Most CI servers set it automatically.\n'));
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats: stats,
        previousFileSizes: previousFileSizes,
        warnings: messages.warnings
      });
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: function filter(file) {
      return file !== paths.appHtml;
    }
  });
}
//# sourceMappingURL=build.js.map