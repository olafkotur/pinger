const request = require('request');

module.exports = {
  get: (uri) => {
    return request.get({ uri }, (error, response) => {
      if (error) {
        console.error(error);
        return false;
      }

      console.log(response.body);
    });
  },

  post: (uri, body) => {
    const options = {
      uri,
      form: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    return request.post(options, (error, response) => {
      if (error) {
        console.error(error);
        return false;
      }

      console.log(response.body);
    });
  },

  random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
};