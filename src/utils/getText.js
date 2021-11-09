'use strict';

const shuffle = require(`./shuffle`);
const getRandomInt = require(`./getRandomInt`);

const getText = (someArray, textLength) => {
  if (textLength) {
    return shuffle(someArray).slice(0, textLength).join(` `);
  }
  return shuffle(someArray)
    .slice(0, getRandomInt(1, someArray.length - 1))
    .join(` `);
};

module.exports = getText;
