var streaming = require('../dist/main.js');
var expect = require('chai').expect;

it('Get server', () => {
  var errorCode = 5;
  return streaming.getServer('fake service token').then(data => {
    expect(data.data.error.error_code).to.equal(errorCode);
  });
});
