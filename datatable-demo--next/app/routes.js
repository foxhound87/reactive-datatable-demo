const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  .add({ page: 'index', name: 'index', pattern: '/' })
  .add({ page: 'test', name: 'test', pattern: '/test' })
  .add({ page: 'orders', name: 'orders', pattern: '/orders' })
  .add({ page: 'users', name: 'users', pattern: '/users' })
  .add({ page: 'user.profile', name: 'user.profile', pattern: '/user/profile' })
  .add({ page: 'users.profiles', name: 'users.profiles', pattern: '/users/profiles' });
