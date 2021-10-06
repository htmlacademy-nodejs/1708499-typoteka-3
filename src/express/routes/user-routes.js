'use strict';
const { Router } = require(`express`);

const userRoutes = new Router();

userRoutes.get(`/register`, (req, res) => res.render(`sign-up`));
userRoutes.get(`/login`, (req, res) => res.render(`login`));

module.exports = userRoutes;
