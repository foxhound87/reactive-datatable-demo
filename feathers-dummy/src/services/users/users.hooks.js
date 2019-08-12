
// Hooks for service `users`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
const { authenticate } = require('@feathersjs/authentication').hooks;
// eslint-disable-next-line no-unused-vars
const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
// !code: imports
const {
  restrictToOwner,
  // associateCurrentUser,
} = require('feathers-authentication-hooks');

const checkPermissions = require('feathers-permissions');
const hasPermissions = require('../../hooks/hasPermissions');
const handleRelationParam = require('../../hooks/handleRelationParam');
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff, iffElse } = commonHooks;
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./users.validate');
// !end

// !code: init // !end

let moduleExports = ({ relations }) => ({
  before: {
    // Your hooks should include:
    //   find  : authenticate('jwt')
    //   get   : authenticate('jwt')
    //   create: hashPassword()
    //   update: hashPassword(), authenticate('jwt')
    //   patch : hashPassword(), authenticate('jwt')
    //   remove: authenticate('jwt')
    // !<DEFAULT> code: before
    all: [],
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
    create: [ hashPassword() ],
    update: [ hashPassword(), authenticate('jwt') ],
    patch: [ hashPassword(), authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
    // !end
  },

  after: {
    // Your hooks should include:
    //   all   : protect('password') /* Must always be the last hook */
    // !<DEFAULT> code: after
    all: [ protect('password') /* Must always be the last hook */ ],
    find: [
      handleRelationParam({
        profile: relations.profile,
      }),
    ],
    get: [
      handleRelationParam({
        profile: relations.profile,
      }),
    ],
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
});

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
