'use strict';

class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  find(query) {
    return this._articles.filter((article) =>
      article.title.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }
}

module.exports = SearchService;
