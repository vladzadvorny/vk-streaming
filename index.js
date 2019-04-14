const rp = require('request-promise');
const WebSocket = require('ws');

const getServer = (serviceToken, apiVersion) =>
  rp({
    uri: 'https://api.vk.com/method/streaming.getServerUrl',
    method: 'POST',
    formData: {
        access_token: serviceToken,
        v: apiVersion || '5.92'
    },
    json: true
  });

class Rules {
  constructor(server, key) {
    this.server = server;
    this.key = key;
  }

  get() {
    return rp({ uri: `https://${this.server}/rules?key=${this.key}` });
  }

  add(rule) {
    return rp({
      method: 'POST',
      uri: `https://${this.server}/rules?key=${this.key}`,
      headers: { 'Content-Type': 'application/json' },
      body: {
        rule: rule
      },
      json: true
    });
  }

  delete(tag) {
    return rp({
      method: 'DELETE',
      url: `https://${this.server}/rules?key=${this.key}`,
      headers: { 'Content-Type': 'application/json' },
      body: {
        tag: tag.toString()
      },
      json: true
    });
  }
}

class Read {
  constructor(server, key) {
    this.server = server;
    this.key = key;
  }

  stream() {
    return new WebSocket(`wss://${this.server}/stream?key=${this.key}`);
  }
}

module.exports = { getServer, Rules, Read };
