import serverless = require('serverless-http');
import * as express from 'express';
// source-map support
import 'source-map-support/register';
// lambda logic imports
import exampleLambda from './src/example';

const app = express();

// endpoints
app
  .get('/', exampleLambda)
  // chain the endpoints like this
  .get('/some/endpoint', exampleLambda)
  .get('/some/random/endpoint/23', exampleLambda);

// export app for tests
module.exports.app = app;

module.exports.handler = serverless(app);
