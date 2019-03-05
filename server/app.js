const express = require('express');
const seneca = require('seneca')();
const app = express();

// query params: ?name=Alex&number1=10&number2=26
app.get('/adder', function (req, res) {
    seneca.client().act({ms: 'adder', query: req.query}, function (err, result) {
        res.send({
            err: err,
            result: result
        });
    });
});

app.get('/greeter', function (req, res) {
    
});

module.exports = app;

