'use strict';

class BotKing {
  constructor (opts) {
    this.middleware = opts.middleware;
    this.handlePreReponse = opts.handlePreReponse;
  }

  async handleRequest (req) {
    if (this.middleware) {
      req = await this.middleware(req);
    }

    if (this.handlePreReponse) {
      await this.handlePreReponse(req);
    }
  }
}

module.exports = BotKing;
