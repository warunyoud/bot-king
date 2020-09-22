'use strict';

class BotKing {
  constructor (opts) {
    this.middleware = opts.middleware;
  }

  async handleRequest (req, path) {
    if (this.middleware) {
      req = await this.middleware(req, path);
    }
  }
}

module.exports = BotKing;
