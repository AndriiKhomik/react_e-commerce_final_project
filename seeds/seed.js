var seeder = require('mongoose-seed');
const db = require('../config/keys').mongoURI;
const authorsData = require('./authors');
const productsData = require('./products');
const categoriesData = require('./categories');
const slidesData = require('./slides');

seeder.connect(db, function () {
  seeder.loadModels([
    './models/Product.js',
    './models/Author.js',
    './models/Catalog.js',
    './models/Slider.js'
  ]);

  seeder.clearModels(['products', 'authors', 'catalogs', 'slides'], function () {
    seeder.populateModels(data);
  });

});

data = [
  {
    model: 'authors',
    documents: authorsData
  },
  {
    model: 'products',
    documents: productsData
  },
  {
    model: 'catalogs',
    documents: categoriesData
  },
  {
    model: 'slides',
    documents: slidesData
  }
]
