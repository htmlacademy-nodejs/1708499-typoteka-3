'use strict';
const { nanoid } = require(`nanoid`);
const { MAX_ID_LENGTH } = require(`../constants`);

class ArticleService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll() {
    return this._articles;
  }

  findOne(id) {
    return this._articles.find((item) => item.id === id);
  }

  create(articleParams) {
    const article = Object.assign(
      { id: nanoid(MAX_ID_LENGTH), comments: [] },
      articleParams,
    );

    this._articles.push(article);
    return article;
  }

  update(id, article) {
    const oldArticle = this.findOne(id);

    return Object.assign(oldArticle, article);
  }

  drop(id) {
    const article = this.findOne(id);

    if (!article) {
      return null;
    }

    this._articles = this._articles.filter((item) => item.id !== id);
    return article;
  }
}

module.exports = ArticleService;
