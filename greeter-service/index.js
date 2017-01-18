require('seneca')()
  .use('greeter')
  .listen({ port: 9001 });