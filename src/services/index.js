const packages = require('./packages/packages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(packages);
};
