'use strict';

const { nanoid } = require(`nanoid`);

const { readFileContent, generateArray, getRandomInt, getText } = require(`../../../utils`);
const {
  MIN_COUNT_COMMENTS,
  MAX_COUNT_COMMENTS,
  MIN_LENGTH_COMMENT,
  MAX_LENGTH_COMMENT,
  MAX_ID_LENGTH,
  FILE_COMMENTS_PATH,
} = require(`./mocksConatants`);

async function generateComments() {
  const commentsLength = getRandomInt(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS);
  const comments = await readFileContent(FILE_COMMENTS_PATH);

  return generateArray(commentsLength, () => ({
    id: nanoid(MAX_ID_LENGTH),
    text: getText(comments, getRandomInt(MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT)),
  }));
}

module.exports = generateComments;
