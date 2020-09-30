const app = require('../../src/app');

describe('\'packages\' service', () => {
  it('registered the service', () => {
    const service = app.service('packages');
    expect(service).toBeTruthy();
  });
});
