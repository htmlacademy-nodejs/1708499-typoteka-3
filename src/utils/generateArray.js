'use strict';

const generateArray = (arrayLength, fn) => Array(arrayLength).fill({}).map(fn);

module.exports = generateArray;
