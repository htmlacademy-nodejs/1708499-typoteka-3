'use strict';

const { nanoid } = require(`nanoid`);

const { readFileContent, generateArray, getRandomInt, getText } = require(`../../utils/index.js`);
const {
  MIN_COUNT_COMMENTS,
  MAX_COUNT_COMMENTS,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  MAX_ID_LENGTH,
} = require(`../constants`);
const FILE_COMMENTS_PATH = `./data/comments.txt`;

async function generateComments() {
  const commentsLength = getRandomInt(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS);
  const comments = await readFileContent(FILE_COMMENTS_PATH);

  return generateArray(commentsLength, () => ({
    id: nanoid(MAX_ID_LENGTH),
    text: getText(comments, getRandomInt(MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH)),
  }));
}

module.exports = generateComments;
