'use strict';

const express = require(`express`);

const articlesRouter = require(`./routes/articles-routes`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);
const userRoutes = require(`./routes/user-routes`);
const searchRoutes = require(`./routes/search-routes`);
const categoriesRoutes = require(`./routes/categories-routes`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/articles`, articlesRouter);
app.use(`/my`, myRoutes);
app.use(`/`, userRoutes);
app.use(`/search`, searchRoutes);
app.use(`/categories`, categoriesRoutes);

// Запуск сервера
app.listen(DEFAULT_PORT);
