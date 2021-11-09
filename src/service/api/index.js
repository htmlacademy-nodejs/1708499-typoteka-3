'use strict';

const { Router } = require(`express`);
const getMockData = require(`../lib/get-mock-data`);
const { CategoryService, ArticleService } = require(`../data-service`);
const categories = require(`./categories`);
const articles = require(`./articles`);

const app = new Router();

(async () => {
  const mockData = await getMockData();

  categories(app, new CategoryService(mockData));
  articles(app, new ArticleService(mockData));
})();

module.exports = app;
