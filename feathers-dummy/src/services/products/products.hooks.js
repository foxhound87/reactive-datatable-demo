
// Hooks for service `products`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
const { authenticate } = require('@feathersjs/authentication').hooks;
// !code: imports // !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks;
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./products.validate');
// !end

// !code: init // !end

let moduleExports = {
  before: {
    // Your hooks should include:
    //   all   : authenticate('jwt')
    // !<DEFAULT> code: before
    all: [ authenticate('jwt') ],
    find: [
      authenticate('jwt'),
      iff((ctx) => ctx.params.provider,
        iffElse(hasPermissions(['admin'], 'all'),
          checkPermissions({
            roles: ['admin'],
            field: 'roles',
          }),
          restrictToOwner()
        ),
      )
    ],
    get: [
      authenticate('jwt'),
      iff((ctx) => ctx.params.provider,
        iffElse(hasRoles(['admin']),
          $restrictToAdmin,
          $restrictToOwner
        )
      ),
    ],
    create: [ authenticate('jwt') ],
    update: [ authenticate('jwt') ],
    patch: [ authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
    // !end
  },

  after: {
    // !<DEFAULT> code: after
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  error: {
    // !<DEFAULT> code: error
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
