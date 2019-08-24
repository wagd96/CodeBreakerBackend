var express = require('express');
var codeBreaker = require('./code-breaker');

var app = express();

app.get('/setsecret/:secret', function (req, res) {
    let number = req.params.secret;
    codeBreaker.setSecret(number);
    res.send({
        message: 'ok, let the game begins'
    });
});

app.get('/guess/:number', function (req, res) {
    let number = req.params.number;
    let guess = codeBreaker.codeBreaker(number);
    res.send({
        result: guess
    });
});

module.exports = app;