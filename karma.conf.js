const webpackConfig = require('./webpack.test');

module.exports = function (cfg) {
  const config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './testing-bootstrap.js', watched: false },
    ],

    preprocessors: {
      './testing-bootstrap.js': ['webpack', 'sourcemap'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
    },

    webpackServer: {
      noInfo: true,
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: cfg.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
  };

  cfg.set(config);
};
