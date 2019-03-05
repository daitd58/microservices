function adder () {
  this.add('ms:adder,path:/login', function (req, respond) {
    console.log('req', req);
    respond(null, { result: Number(req.query.number1) + Number(req.query.number2)});
  });
}

require('seneca')()
  .use(adder)
  .listen();