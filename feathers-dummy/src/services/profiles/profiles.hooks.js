
// Hooks for service `profiles`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
const { authenticate } = require('@feathersjs/authentication').hooks;
// !code: imports
const {
  restrictToOwner,
  // associateCurrentUser,
} = require('feathers-authentication-hooks');

const checkPermissions = require('feathers-permissions');
const hasPermissions = require('../../hooks/hasPermissions');
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff, iffElse } = commonHooks;
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./profiles.validate');
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
    get: [ authenticate('jwt') ],
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
