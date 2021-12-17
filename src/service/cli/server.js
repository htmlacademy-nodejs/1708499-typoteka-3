'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const bodyParser = require('body-parser');
const routes = require(`../api`);
const { API_PREFIX } = require(`../constants`);
const DEFAULT_PORT = 3000;

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    const app = express();
    app.use(bodyParser.json());
    app.use(API_PREFIX, routes);

    app
      .listen(port)
      .on(`listening`, () => {
        console.info(chalk.green(`Ожидаю соединений на ${port}`));
      })
      .on(`error`, ({ message }) => {
        console.error(chalk.red(`Ошибка при создании сервера: ${message}`));
      });
  },
};
