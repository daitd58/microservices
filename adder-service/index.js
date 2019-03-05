function adder () {
  this.add({ms: 'adder'}, function (msg, respond) {
    respond(null, { result: Number(msg.number1) + Number(msg.number2)});
  });
}

require('seneca')()
  .use(adder)
  .listen();