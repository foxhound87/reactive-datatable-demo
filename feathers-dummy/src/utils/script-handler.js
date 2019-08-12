/* eslint no-console: 0 */
/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */
const path = require('path');

const dashes = '------------------------------------------------------------------';

const $log = (msg) => ([
  console.log(dashes),
  console.log(msg),
  console.log(dashes),
]);

module.exports = ({
  handlersPath,
  execMessage,
  errorMessage,
  successMessage,
}) => {

  const catchError = (err) => ([
    $log(errorMessage),
    console.error(err),
    process.exit(),
  ]);

  const handlerFile = path.resolve(handlersPath, process.env.HANDLER);

  console.log({ handlerFile });

  let handler = require(handlerFile).apply();

  if (Array.isArray(handler)) handler = Promise.all(handler);

  if (!handler) catchError();

  return Promise.all([
    $log([execMessage, process.env.HANDLER].join(' >>> HANDLER: ')),
    handler,
  ])
    .then(() => ([
      $log(successMessage),
      process.exit(),
    ])
      .catch(catchError));
};

