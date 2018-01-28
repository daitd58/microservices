const seneca = require('seneca')();
const Promise = require('bluebird');

// Convert act to Promise
const act = Promise.promisify(seneca.client({ host: 'adder-service' }).act, { context: seneca });

// Service methods
const SUM = { role: 'adder', cmd: 'sum' };

// Call Service methods
const sum = (number1, number2) => {
    return act(Object.assign({}, SUM, { number1, number2 }));
};

module.exports = {
    sum
};
