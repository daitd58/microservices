const express = require('express');
const greeterService = require('./services/greeter');
const adderService = require('./services/adder');
const join = require("bluebird").join;

const app = express();

// query params: ?name=Alex&number1=10&number2=26
app.get('/', function (req, res) {
    join(
        greeterService.sayHello(req.query.name),
        adderService.sum(req.query.number1, req.query.number2),
        function (greeting, sum) {
            res.send(`${greeting.result}, sum of numbers is ${sum.result}`);
        }
    );
});

module.exports = app;

