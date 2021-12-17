'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const { nanoid } = require(`nanoid`);

const {
  readFileContent,
  generateArray,
  getCreatedDate,
  getPostTitle,
  getPostCategories,
  getText,
} = require(`../../../utils`);
const generateComments = require(`./generateComments`);
const {
  DEFAULT_COUNT_PUBLICATIONS,
  MAX_COUNT_PUBLICATIONS,
  LIMIT_COUNT_PUBLICATIONS_MESSAGE,
  PUBLICATION_ANNOUNCE_LENGTH,
  MOCK_FILE_PATH,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
} = require(`./mocksConatants`);
const { ExitCode, MAX_ID_LENGTH } = require(`../../constants`);

const getCountPublication = (args) => {
  const [count] = args;
  return Number.parseInt(count, 10) || DEFAULT_COUNT_PUBLICATIONS;
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const countPublication = getCountPublication(args);

    if (countPublication > MAX_COUNT_PUBLICATIONS) {
      console.error(chalk.red(LIMIT_COUNT_PUBLICATIONS_MESSAGE));
      process.exit(ExitCode.error);
    }

    const sentences = await readFileContent(FILE_SENTENCES_PATH);
    const titles = await readFileContent(FILE_TITLES_PATH);
    const categories = await readFileContent(FILE_CATEGORIES_PATH);

    const publications = generateArray(countPublication, async () => {
      return {
        id: nanoid(MAX_ID_LENGTH),
        title: getPostTitle(titles),
        createdDate: getCreatedDate(),
        announce: getText(sentences, PUBLICATION_ANNOUNCE_LENGTH),
        fullText: getText(sentences),
        category: getPostCategories(categories),
        comments: await generateComments(),
      };
    });

    const pubs = await Promise.all(publications);
    const content = JSON.stringify(pubs, null, 2);

    try {
      await fs.writeFile(MOCK_FILE_PATH, content);
      console.log(chalk.green(`Operation success. File created.`));
      process.exit(ExitCode.success);
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
      process.exit(ExitCode.error);
    }
  },
};
