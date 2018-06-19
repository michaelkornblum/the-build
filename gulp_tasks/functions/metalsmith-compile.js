const metalsmith = require('metalsmith');
const {
  assets,
  beautify,
  codeHighlight,
  collections,
  domTransform,
  excerpts,
  feed,
  inPlace,
  layouts,
  markdown,
  pagination,
  permalinks,
  tags,
} = require('load-metalsmith-plugins')();

module.exports = () =>
  metalsmith('.')
  .metadata({
    site: {
      title: 'oojs-tutorial',
      site_url: 'https://oojstutorial.com',
      description: 'building a blog with Object Oriented JavaScript',
    },
    helpers: {},
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(collections({
    posts: {
      pattern: 'posts/*.html',
      sortBy: 'date',
      reverse: true,
    },
    pages: {
      pattern: 'pages/*.html',
      sortBy: 'pageOrder',
    },
  }))
  .use(permalinks({
    relative: false,
    linksets: [{
        match: {
          collection: 'posts'
        },
        pattern: 'posts/:date/:title',
      },
      {
        match: {
          collection: 'pages'
        },
        pattern: ':title',
      },
    ],
  }))
  .use(excerpts())
  .use(pagination({
    'collections.posts': {
      perPage: 1,
      layout: 'archives.pug',
      path: 'archives/:num/index.html',
      pageMetadata: {
        title: 'Archives',
      },
    },
  }))
  .use(tags({
    handle: 'tags',
    path: 'categories/:tag/index.html',
    layout: 'tag.pug',
    sortBy: 'date',
    reverse: true,
  }))
  .use(layouts({
    engine: 'pug',
    default: 'default.pug',
  }))
  .use(assets({
    source: './assets',
    destination: './assets',
  }))
  .use(feed({
    collection: 'posts',
  }))
  .use(beautify())
  .build((err) => {
    if (err) throw err;
  });
