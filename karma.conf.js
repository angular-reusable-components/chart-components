module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify','jasmine'],
    reporters: ['progress', 'osx', 'mocha'],
    preprocessors: {
      'spec/**/*.js': [ 'browserify' ],
      'src/index.js': [ 'browserify' ]
    },
    browserify: {
      debug: true,
      transform: [ 'partialify', 'browserify-ngannotate', 'brfs'  ]
    },
    files: [
      './node_modules/jquery/dist/cdn/jquery-2.1.3.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/index.js',
      './spec/**/test_*.js'
    ]
  });
};
