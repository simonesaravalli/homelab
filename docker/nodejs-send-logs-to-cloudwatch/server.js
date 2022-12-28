'use strict';
require('dotenv').config();

const express = require('express');
var logger = require('./logger.js');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World from ${process.env.MY_NAME}`);
});

app.use((req, res, next) => {
  logger.log('info', `Requesting ${req.method} ${req.originalUrl}`, {tags: 'http', additionalInfo: {body: req.body, headers: req.headers }});
  next()
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
