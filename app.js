var express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Pass to next layer of middleware
    next();
});

app.get('/api', function(req, res) {
    res.sendFile('./index.html', {root: __dirname })
});

var classController = require('./api/controllers/classes');
app.use('/api/class', classController);

var roomController = require('./api/controllers/rooms');
app.use('/api/room', roomController);

module.exports = app;