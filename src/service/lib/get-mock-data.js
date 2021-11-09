'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const FILENAME = `mocks.json`;
let data = [];

const getMockData = async () => {
  if (data.length > 0) {
    return data;
  }

  try {
    const fileContent = await fs.readFile(FILENAME, 'utf-8');
    if (fileContent) {
      data = JSON.parse(fileContent);
    } else {
      data = [];
    }
  } catch (err) {
    console.error(chalk.red(err));
    return err;
  }

  return data;
};

module.exports = getMockData;
