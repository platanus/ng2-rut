module.exports = {
  devtool: 'inline-source-map',

  target: 'node',

  ts: {
    configFileName: 'tsconfig.tests.json',
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts'],
      },
    ],
  },
};

const helpers = {};
const path = require('path');

const rootPath = path.resolve(__dirname, '..');

function root(...args) {
  const processedArgs = Array.prototype.slice.call(args, 0);

  return path.join(...path, ...[rootPath].concat(processedArgs));
}

helpers.root = root;
