'use strict';

const chalk = require(`chalk`);

const helpText = `

Программа запускает http-сервер и формирует файл с данными для API.

    Гайд:
    service.js <command>

    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json
    --server <port>       запускает сервер на порту <port>, если <port> не указан, сервер запускается на 3000 порту

`;


module.exports = {
  name: `--help`,
  run() {
    console.info(chalk.gray(helpText));
  }
};
