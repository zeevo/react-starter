const middleware: any[] = [];

console.log('here', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({ collapsed: true }));
}

export default middleware;
