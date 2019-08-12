const { combine } = require('feathers-hooks-common');
const _ = require('lodash');

module.exports = function (relations) {
  // an arrow func cannot be used because we need 'this'
  return function (hook) {
    if (hook.type !== 'after')
      throw new Error('The "handleRelationParam" hook should only be used as a "after" hook.');

    if (hook.params.relation === undefined)
      return hook;

    let $params = hook.params.relation.split(',');

    const $relations = _.compact($params.map((key) => relations[key]));

    if ($relations.length)
      return combine(...$relations)
        .call(this, hook)
        .then(() => hook);

    return hook;
  };
};
