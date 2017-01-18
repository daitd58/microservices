module.exports = function (options) {
    this.add('role:adder,cmd:sum', sum);

    function sum(msg, respond) {
        respond(null, { result: Number(msg.number1) + Number(msg.number2)});
    }
}