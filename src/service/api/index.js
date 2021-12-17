'use strict';

const { Router } = require(`express`);
const getMockData = require(`../lib/get-mock-data`);
const {
  CategoryService,
  ArticleService,
  CommentsService,
  SearchService,
} = require(`../data-service`);
const categories = require(`./categories`);
const articles = require(`./articles`);
const search = require(`./search`);

const app = new Router();

(async () => {
  const mockData = await getMockData();

  categories(app, new CategoryService(mockData));
  articles(app, new ArticleService(mockData), new CommentsService(mockData));
  search(app, new SearchService(mockData));
})();

module.exports = app;
