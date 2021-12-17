'use strict';

const { Router } = require(`express`);
const { HttpCode } = require(`../constants`);
const articleValidator = require(`../middlewares/articleValidator`);
const commentValidator = require(`../middlewares/commentValidator`);
const articleExist = require(`../middlewares/articleExist`);

module.exports = (app, articleService, commentsService) => {
  const route = new Router();

  app.use(`/articles`, route);

  route.get(`/`, (req, res) => {
    const articles = articleService.findAll();

    if (!articles) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found articles.`);
    }

    return res.status(HttpCode.OK).json(articles);
  });

  route.get(`/:articleId`, (req, res) => {
    const { articleId } = req.params;
    const article = articleService.findOne(articleId);

    if (!article) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found with ${articleId}`);
    }

    return res.status(HttpCode.OK).json(article);
  });

  route.get(
    `/:articleId/comments`,
    articleExist(articleService),
    (req, res) => {
      const { articleId } = req.params;
      const { article } = res.locals;
      const comments = commentsService.findAll(article);

      if (!comments) {
        return res
          .status(HttpCode.NOT_FOUND)
          .send(`Not found comments with ${articleId}`);
      }

      return res.status(HttpCode.OK).json(comments);
    },
  );

  route.post(`/`, articleValidator, (req, res) => {
    const article = articleService.create(req.body);

    return res.status(HttpCode.CREATED).json(article);
  });

  route.post(
    `/:articleId/comments`,
    articleExist(articleService),
    commentValidator,
    (req, res) => {
      const { article } = res.locals;

      const comment = commentsService.create(article, req.body);

      return res.status(HttpCode.CREATED).json(comment);
    },
  );

  route.put(
    `/:articleId`,
    articleExist(articleService),
    articleValidator,
    (req, res) => {
      const { articleId } = req.params;
      const updatedArticle = articleService.update(articleId, req.body);
      return res.status(HttpCode.OK).json(updatedArticle);
    },
  );

  route.delete(`/:articleId`, articleExist(articleService), (req, res) => {
    const { articleId } = req.params;
    const article = articleService.drop(articleId);

    if (!article) {
      return res.status(HttpCode.NOT_FOUND).send(`Not found with ${articleId}`);
    }

    return res.status(HttpCode.OK).json(article);
  });

  route.delete(
    `/:articleId/comments/:commentId`,
    articleExist(articleService),
    (req, res) => {
      const { commentId } = req.params;
      const { article } = res.locals;

      const deleted = commentsService.drop(article, commentId);

      if (!deleted) {
        return res.status(HttpCode.NOT_FOUND).send(`Not found comment`);
      }

      return res.status(HttpCode.OK).json(deleted);
    },
  );
};
