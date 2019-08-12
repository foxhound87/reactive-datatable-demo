const app = require('../../app');
const faker = require('faker');

const factory = (item) => ({
  userId: item._id,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.phoneNumber(),
  country: faker.address.country(),
});

const seedWith = (data) =>
  Promise.all(data.map((item) =>
    app.service('profiles').create(factory(item))
  ));

const seed = () =>
  app.service('users').find()
    .then((res) => seedWith(res.data));

module.exports = { seed, seedWith };
