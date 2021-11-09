'use strict';

const path = require(`path`);

const DEFAULT_COUNT_PUBLICATIONS = 10;
const MAX_COUNT_PUBLICATIONS = 1000;
const LIMIT_COUNT_PUBLICATIONS_MESSAGE = `Не больше 1000 публикаций`;
const PUBLICATION_ANNOUNCE_LENGTH = 4;

const MOCK_FILE_PATH = path.join(__dirname, `../../../../`, `mocks.json`);

const MIN_COUNT_COMMENTS = 1;
const MAX_COUNT_COMMENTS = 10;
const MIN_LENGTH_COMMENT = 1;
const MAX_LENGTH_COMMENT = 5;
const MAX_ID_LENGTH = 6;

const FILE_SENTENCES_PATH = path.join(__dirname, `../../../../`, `data`, `sentences.txt`);
const FILE_TITLES_PATH = path.join(__dirname, `../../../../`, `data`, `titles.txt`);
const FILE_CATEGORIES_PATH = path.join(__dirname, `../../../../`, `data`, `categories.txt`);
const FILE_COMMENTS_PATH = path.join(__dirname, `../../../../`, `data`, `comments.txt`);

module.exports = {
  DEFAULT_COUNT_PUBLICATIONS,
  MAX_COUNT_PUBLICATIONS,
  LIMIT_COUNT_PUBLICATIONS_MESSAGE,
  PUBLICATION_ANNOUNCE_LENGTH,
  MOCK_FILE_PATH,

  MIN_COUNT_COMMENTS,
  MAX_COUNT_COMMENTS,
  MIN_LENGTH_COMMENT,
  MAX_LENGTH_COMMENT,
  MAX_ID_LENGTH,

  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  FILE_COMMENTS_PATH,
};
