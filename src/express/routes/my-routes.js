'use strict';
const { Router } = require(`express`);

const myRoutes = new Router();

myRoutes.get(`/`, (req, res) => res.send(`${req.baseUrl}`));
myRoutes.get(`/comments`, (req, res) => res.send(`${req.baseUrl}/comments`));

module.exports = myRoutes;
