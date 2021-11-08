'use strict';

const shuffle = require(`./shuffle`);
const getRandomInt = require(`./getRandomInt`);

const getText = (someArray, maxLength) => {
  if (maxLength) {
    return shuffle(someArray).slice(0, maxLength).join(` `);
  }
  return shuffle(someArray)
    .slice(0, 0, getRandomInt(1, someArray.length - 1))
    .join(` `);
};

module.exports = getText;
