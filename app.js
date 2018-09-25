const express = require('express');

const app = express();

// Add headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Pass to next layer of middleware
  next();
});

app.get('/api', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

const classController = require('./api/controllers/classes');

app.use('/api/class', classController);

const roomController = require('./api/controllers/rooms');

app.use('/api/room', roomController);

module.exports = app;
