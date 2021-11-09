'use strict';

const { Router } = require(`express`);
const { HttpCode } = require(`../constants`);

module.exports = (app, service) => {
  const route = new Router();

  app.use(`/categories`, route);

  route.get(`/`, (req, res) => {
    const categories = service.findAll();

    if (!categories || categories.length === 0) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found categories.`);
    }

    res.status(HttpCode.OK).json(categories);
  });
};
