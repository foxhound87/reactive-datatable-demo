
/* eslint quotes: 0 */
// Defines Mongoose model for service `profiles`. (Can be re-generated.)
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
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    country: { type: String },
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
