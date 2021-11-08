'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const nanoid = require(`nanoid`).nanoid;

const {
  readFileContent,
  generateArray,
  getCreatedDate,
  getPostTitle,
  getPostCategories,
  getText,
} = require(`../../utils/index.js`);
const generateComments = require(`./generateComments`);

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

    const sentences = await readFileContent(FILE_SENTENCES_PATH);
    const titles = await readFileContent(FILE_TITLES_PATH);
    const categories = await readFileContent(FILE_CATEGORIES_PATH);

    const publications = generateArray(countPublication, async () => {
      return {
        id: nanoid(),
        title: getPostTitle(titles),
        createdDate: getCreatedDate(),
        announce: getText(sentences, ANNOUNCE_LENGTH),
        fullText: getText(sentences),
        category: getPostCategories(categories),
        comments: await generateComments(),
      };
    });

    const pubs = await Promise.all(publications);
    const content = JSON.stringify(pubs, null, 2);

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
