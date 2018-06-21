const rupture = require('rupture');
const postStylus = require('poststylus');
const rucksack = require('rucksack-css');
const lost = require('lost');
const typographic = require('typographic');
const autoprefixer = require('autoprefixer');
const { plumber, stylus } = require('gulp-load-plugins')();
const combiner = require('stream-combiner');

module.exports = opts =>
  combiner(
    plumber(),
    stylus({
      use: [
        typographic(),
        rupture(),
        postStylus([
          rucksack,
          lost,
          autoprefixer(
            opts.autoprefixer
          ),
        ]),
      ],
    }),
  );
  