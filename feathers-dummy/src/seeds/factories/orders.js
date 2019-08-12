const app = require('../../app');
const faker = require('faker');

const factory = (item) => ({
  userId: item._id,
  product: [faker.commerce.productName()],
  amount: faker.finance.amount(),
  tax: faker.random.number(30),
  discount: faker.random.number(15),
});

const seedWith = (data) =>
  Promise.all(data.map((item) =>
    app.service('orders').create(factory(item))
  ));

const seed = () =>
  app.service('users').find()
    .then((res) => seedWith(res.data));

module.exports = { seed, seedWith };
