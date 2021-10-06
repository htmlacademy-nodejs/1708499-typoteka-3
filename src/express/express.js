'use strict';

const express = require(`express`);
const path = require(`path`);

const articlesRouter = require(`./routes/articles-routes`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);
const userRoutes = require(`./routes/user-routes`);
const searchRoutes = require(`./routes/search-routes`);
const categoriesRoutes = require(`./routes/categories-routes`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRoutes);
app.use(`/articles`, articlesRouter);
app.use(`/my`, myRoutes);
app.use(`/`, userRoutes);
app.use(`/search`, searchRoutes);
app.use(`/categories`, categoriesRoutes);

app.use(function (req, res, next) {
  res.status(404).render(`errors/404`);
});

app.use(function (err, req, res, next) {
  res.status(500).render(`errors/500`);
});

app.listen(DEFAULT_PORT);
