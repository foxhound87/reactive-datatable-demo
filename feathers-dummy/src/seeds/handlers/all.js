const user = require('../factories/users');
const usersProfiles = require('../factories/users-profiles');
const orders = require('../factories/orders');

module.exports = () => ([

  user.seed(99).then((users) => Promise.all([
    usersProfiles.seedWith(users),
    orders.seedWith(users),
  ])),

]);