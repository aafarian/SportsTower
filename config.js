const register = require('@babel/register').default;

if (process.env.NODE_ENV === 'production') {
  require('./build/server.js.js.js');
} else {
  register({ extensions: ['.ts', '.tsx', '.js', '.jsx'] });
  require('./src/server/server');
}
