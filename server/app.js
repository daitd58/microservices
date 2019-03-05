const express = require('express');
const seneca = require('seneca')();
const app = express();

// query params: ?name=Alex&number1=10&number2=26
app.get('/adder', function (req, res) {
    seneca.client({ host: 'adder-service' }).act({ms: 'adder', path: '/login', query: req.query}, function (err, result) {
        res.send({
            err: err,
            result: result
        });
    });
});

app.get('/greeter', function (req, res) {
    seneca.client({ host: 'greeter-service' }).act({ms: 'greeter', query: req.query}, function (err, result) {
        res.send({
            err: err,
            result: result
        });
    });
});

module.exports = app;

