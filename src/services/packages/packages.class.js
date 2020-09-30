const { Service } = require('feathers-mongoose');

exports.Packages = class Packages extends Service {

  _create(data, params) {
    data._id = data.transaction_id;
    return super._create(data, params);
  }

  _find(params) {
    if (params.query.transaction_id)
      params.query._id = params.query.transaction_id;
    return super._find(params);
  }

  _get(id, params) {
    params.query.transaction_id = id;
    return super._get(id, params);
  }

  _update(id, data, params) {
    if (id)
      params.query.transaction_id = id;
    return super._update(id, data, params);
  }

  _patch(id, data, params) {
    if (id)
      params.query.transaction_id = id;
    return super._patch(id, data, params);
  }

  _remove(id, params) {
    if (id)
      params.query.transaction_id = id;
    return super._remove(id, params);
  }
};
