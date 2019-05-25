import serverless =  require('serverless-http');
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
  // .get('/error', thrower)
;

module.exports.handler = serverless(app);