require('seneca')()
  .use('adder')
  .listen({ port: 9002 });