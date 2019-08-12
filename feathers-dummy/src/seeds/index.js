const handler = require('../utils/script-handler');

return handler({
  handlersPath:     './src/seeds/handlers',
  execMessage:      '--- Seeding...',
  successMessage:   '--- Seed Finish',
  errorMessage:     '--- Seed Error',
});
