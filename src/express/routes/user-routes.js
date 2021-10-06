'use strict';
const { Router } = require(`express`);

const userRoutes = new Router();

userRoutes.get(`/register`, (req, res) => res.send(`${req.baseUrl}/register`));
userRoutes.get(`/login`, (req, res) => res.send(`${req.baseUrl}/login`));

module.exports = userRoutes;
