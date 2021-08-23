'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {getCreatedDate, getTitle, getText, getCategories} = require(`../../utils`);
const {
  DEFAULT_COUNT,
  MAX_COUNT,
  LIMIT_COUNT_MESSAGE,
  FILE_NAME,
  ExitCode,
  ANNOUNCE_LENGTH,
} = require(`../constants`);
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

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

    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);

    const publications = Array(countPublication).fill({}).map(() => ({
      title: getTitle(titles),
      createdDate: getCreatedDate(),
      announce: getText(sentences, ANNOUNCE_LENGTH),
      fullText: getText(sentences, ANNOUNCE_LENGTH),
      category: getCategories(categories),
    }));

    const content = JSON.stringify(publications);

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
