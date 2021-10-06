'use strict';
const { Router } = require(`express`);

const articlesRouter = new Router();

articlesRouter.get(`/category/:id`, (req, res) => res.send(`${req.baseUrl}/category/:id`));
articlesRouter.get(`/add`, (req, res) => res.send(`${req.baseUrl}/add`));
articlesRouter.get(`/edit/:id`, (req, res) => res.send(`${req.baseUrl}/edit/:id`));
articlesRouter.get(`/:id`, (req, res) => res.send(`${req.baseUrl}/:id`));

module.exports = articlesRouter;
