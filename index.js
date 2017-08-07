const axios = require('axios');
const querystring = require('querystring');
const WebSocket = require('ws');

const getServer = serviceToken =>
  axios.post(
    'https://api.vk.com/method/streaming.getServerUrl',
    querystring.stringify({ access_token: serviceToken })
  );

class Rules {
  constructor(server, key) {
    this.server = server;
    this.key = key;
  }

  get() {
    return axios.get(`https://${this.server}/rules?key=${this.key}`);
  }

  add(rule) {
    return axios({
      method: 'post',
      url: `https://${this.server}/rules?key=${this.key}`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        rule: rule
      }
    });
  }

  delete(tag) {
    return axios({
      method: 'delete',
      url: `https://${this.server}/rules?key=${this.key}`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        tag: tag.toString()
      }
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