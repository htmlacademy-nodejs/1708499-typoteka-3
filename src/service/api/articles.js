'use strict';

const { Router } = require(`express`);
const { HttpCode } = require(`../constants`);

module.exports = (app, articleService) => {
  const route = new Router();

  app.use(`/articles`, route);

  route.get(`/`, (req, res) => {
    const articles = articleService.findAll();

    if (!articles || articles.length === 0) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found articles.`);
    }

    return res.status(HttpCode.OK).json(articles);
  });

  route.get(`/:articleId`, (req, res) => {
    const { articleId } = req.params;
    const article = articleService.findOne(articleId);

    if (!article || article.length === 0) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found with ${articleId}`);
    }

    return res.status(HttpCode.OK).json(article);
  });
};
