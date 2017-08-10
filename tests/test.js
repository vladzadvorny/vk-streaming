var streaming = require('../index');
var expect = require('chai').expect;

it('Get server', () => {
  var errorCode = 5;
  return streaming.getServer('fake service token').then(data => {
    expect(data.error.error_code).to.equal(errorCode);
  });
});
