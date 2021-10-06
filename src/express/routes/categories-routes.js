'use strict';
const { Router } = require(`express`);

const categoriesRoutes = new Router();

categoriesRoutes.get(`/`, (req, res) => res.render(`all-categories`));

module.exports = categoriesRoutes;
