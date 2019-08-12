const _ = require('lodash');

const hasUserRoleParam = (context) =>
  (context.params.user && context.params.user.roles);

const checkRoleParam = (context, roles, all) => {
  const jwtCheck = (_.intersection(context.params.user.roles, roles).length !== 0);
  const paramCheck = (context.params.role && _.intersection(roles, [context.params.role]).length) ? true : false;
  const checkAllParam = (context.params.all === true || context.params.all === 'true');
  const checkRole = (jwtCheck && paramCheck);
  return all === 'all' ? (checkAllParam && checkRole) : checkRole;
};

module.exports = (roles, all = false) => (context) =>
  hasUserRoleParam(context)
    ? checkRoleParam(context, roles, all)
    : false;
