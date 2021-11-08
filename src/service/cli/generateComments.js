'use strict';

const nanoid = require(`nanoid`).nanoid;

const { readFileContent, generateArray } = require(`../../utils/index.js`);
const { getRandomInt, getText } = require(`../../utils`);
const {
  MIN_COUNT_COMMENTS,
  MAX_COUNT_COMMENTS,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
} = require(`../constants`);
const FILE_COMMENTS_PATH = `./data/comments.txt`;

async function generateComments() {
  const commentsLength = getRandomInt(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS);
  const comments = await readFileContent(FILE_COMMENTS_PATH);

  return generateArray(commentsLength, () => ({
    id: nanoid(),
    text: getText(comments, getRandomInt(MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH)),
  }));
}

module.exports = generateComments;
