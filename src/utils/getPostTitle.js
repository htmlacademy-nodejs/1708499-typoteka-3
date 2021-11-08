'use strict';

const getRandomInt = require(`./getRandomInt`);

const getPostTitle = (titles) => {
  return titles[getRandomInt(0, titles.length - 1)];
};

module.exports = getPostTitle;
