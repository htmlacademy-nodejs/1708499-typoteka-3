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

module.exports = {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  DEFAULT_COUNT,
  MAX_COUNT,
  LIMIT_COUNT_MESSAGE,
  FILE_NAME,
  ANNOUNCE_LENGTH,
};
