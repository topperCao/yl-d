const { readFileSync: rfs } = require('fs');

module.exports = class extends think.Controller {
  jsAction() {
    this.ctx.type = 'application/javascript';
    const body = rfs(`${think.ROOT_PATH}/esm/index.js`);
    this.ctx.res.end(body);
  }
  cssAction() {
    this.ctx.type = 'text/css';
    const body = rfs(`${think.ROOT_PATH}/esm/index.css`);
    this.ctx.res.end(body);
  }
};
