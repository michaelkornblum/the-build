const plumber = require('gulp-plumber');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const combiner = require('stream-combiner');
const config = require('../../webpack.config.js');
const webpack = require('webpack');

module.exports = () =>
  combiner(
    plumber(),
    named(),
    webpackStream({ config }, webpack)
  );

