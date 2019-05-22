const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log("/", req);
  res.send('Hello World!')
})

app.get('/asdasd', (req, res) => {
  console.log("/asdads", req);
  res.send('Hello World!')
})

module.exports.handler = serverless(app);