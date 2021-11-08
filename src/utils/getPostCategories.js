'use strict';

const shuffle = require(`./shuffle`);
const getRandomInt = require(`./getRandomInt`);

const getPostCategories = (categories) => {
  return shuffle(categories).slice(0, getRandomInt(1, categories.length - 1));
};

module.exports = getPostCategories;
