function greeter () {
  this.add('ms:greeter', function (req, respond) {
    console.log('req', req);
    respond(null, { result: `Hello ${req.query.name}` });
  });
}

require('seneca')()
  .use(greeter)
  .listen();