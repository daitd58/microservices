const seneca = require('seneca')();
const Promise = require('bluebird');

// Convert act to Promise
const act = Promise.promisify(seneca.client({ host: 'greeter-service', port: 9001 }).act, { context: seneca });

// Service methods
const SAY_HELLO = { role: 'greeter', cmd: 'sayHello' };

// Call Service methods
const sayHello = (name) => {
    return act(Object.assign({}, SAY_HELLO, { name }));
};

module.exports = {
    sayHello
};