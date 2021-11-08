'use strict';

const dayjs = require('dayjs');
const getRandomInt = require('./getRandomInt');

const getCreatedDate = () => {
  const startDate = dayjs().subtract(3, 'month').valueOf();
  const endDate = dayjs().valueOf();

  return dayjs(getRandomInt(startDate, endDate)).format();
};

module.exports = getCreatedDate;
