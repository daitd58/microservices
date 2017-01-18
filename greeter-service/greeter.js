module.exports = function (options) {
    this.add('role:greeter,cmd:sayHello', sayHello);

    function sayHello(msg, respond) {
        respond(null, { result: `Hello ${msg.name}` });
    }
}