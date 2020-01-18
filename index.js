const delay = require('delay');
const Helper = require('./helper');

const options = {
  uri: process.env.URI ? process.env.URI : 'https://localhost:8080',
  minTimeout: 300000,
  maxTimeout: 1200000,
}

async function main() {
  while (true) {
    Helper.get(options.uri);
    await delay(Helper.random(options.minTimeout, options.maxTimeout));
  }
} main();