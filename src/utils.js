'use strict';

const dayjs = require('dayjs');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const getCreatedDate = () => {
  const startDate = dayjs().subtract(3, 'month').valueOf();
  const endDate = dayjs().valueOf();

  return dayjs(getRandomInt(startDate, endDate)).format();
};

const getTitle = (titles) => {
  return titles[getRandomInt(0, titles.length - 1)];
};

const getText = (someArray, maxLength) => {
  if (maxLength) {
    return shuffle(someArray).slice(0, maxLength).join(` `);
  }
  return shuffle(someArray)
    .slice(0, 0, getRandomInt(1, someArray.length - 1))
    .join(` `);
};

const getCategories = (categories) => {
  return shuffle(categories).slice(0, getRandomInt(1, categories.length - 1));
};

module.exports = {
  getCreatedDate,
  getTitle,
  getText,
  getCategories,
  getRandomInt,
};
