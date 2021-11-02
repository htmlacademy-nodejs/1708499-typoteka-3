'use strict';
const express = require(`express`);
const { Router } = require(`express`);
const fs = require(`fs`).promises;

const FILENAME = `mocks.json`;

const postsRoutes = new Router();
const jsonParser = express.json();

const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

postsRoutes.get(
  `/posts`,
  jsonParser,
  asyncMiddleware(async (req, res) => {
    try {
      const fileContent = await fs.readFile(FILENAME);
      if (!!fileContent.toString()) {
        return res.json(JSON.parse(fileContent));
      }
      return res.json([]);
    } catch (err) {
      return res.json([]);
    }
  }),
);

module.exports = postsRoutes;
