
/* eslint quotes: 0 */
// Defines Mongoose model for service `orders`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

const { Types } = mongoose.Schema;

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    userId: { type: Types.ObjectId },
    products: [Types.ObjectId],
    amount: { type: Number },
    tax: { type: Number },
    discount: { type: Number },
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
