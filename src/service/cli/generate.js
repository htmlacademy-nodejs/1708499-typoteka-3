'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {getRandomInt, shuffle, getCreatedDate} = require(`../../utils`);
const {
  DEFAULT_COUNT,
  MAX_COUNT,
  LIMIT_COUNT_MESSAGE,
  FILE_NAME,
  TITLES,
  ANNOUNCES,
  CATEGORIES,
  ExitCode
} = require(`../constants`);


const generatePublications = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    createdDate: getCreatedDate(),
    announce: shuffle(ANNOUNCES).slice(0, 4).join(` `),
    fullText: shuffle(ANNOUNCES).slice(0, getRandomInt(1, ANNOUNCES.length - 1)).join(` `),
    category: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length - 1)),
  }))
);

const getCountPublication = (args) => {
  const [count] = args;
  return Number.parseInt(count, 10) || DEFAULT_COUNT;
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const countPublication = getCountPublication(args);

    if (countPublication > MAX_COUNT) {
      console.error(chalk.red(LIMIT_COUNT_MESSAGE));
      process.exit(ExitCode.error);
    }

    const content = JSON.stringify(generatePublications(countPublication));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));
      process.exit(ExitCode.success);
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
      process.exit(ExitCode.error);
    }
  },
};
