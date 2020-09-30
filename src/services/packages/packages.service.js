// Initializes the `packages` service on path `/packages`
const { Packages } = require('./packages.class');
const createModel = require('../../models/packages.model');
const hooks = require('./packages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/packages', new Packages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('packages');

  service.hooks(hooks);
};
