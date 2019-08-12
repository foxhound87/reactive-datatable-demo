
// Configure the Feathers services. (Can be re-generated.)
let orders = require('./orders/orders.service');
let products = require('./products/products.service');
let profiles = require('./profiles/profiles.service');
let users = require('./users/users.service');

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(orders);
  app.configure(products);
  app.configure(profiles);
  app.configure(users);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
