const app = require('../../app');
const faker = require('faker');
const _ = require('lodash');

const factory = () => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  isVerified: faker.random.boolean(),
});

module.exports = {

  seed: (n) => {
    const items = [];
    _.times(n, () => items.push(factory()));

    return Promise.all(items.map((item) =>
      app.service('users').create(item)
    ));
  },

};
