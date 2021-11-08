'use strict';

const DEFAULT_COMMAND = `--help`;
const USER_ARGV_INDEX = 2;
const ExitCode = {
  success: 0,
  error: 1,
};

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;
const LIMIT_COUNT_MESSAGE = `Не больше 1000 публикаций`;
const FILE_NAME = `mocks.json`;
const ANNOUNCE_LENGTH = 4;
const MIN_COUNT_COMMENTS = 1;
const MAX_COUNT_COMMENTS = 10;
const MIN_COMMENT_LENGTH = 1;
const MAX_COMMENT_LENGTH = 5;

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  DEFAULT_COUNT,
  MAX_COUNT,
  LIMIT_COUNT_MESSAGE,
  FILE_NAME,
  ANNOUNCE_LENGTH,
  MIN_COUNT_COMMENTS,
  MAX_COUNT_COMMENTS,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
};
