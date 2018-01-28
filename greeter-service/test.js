const Seneca = require('seneca');
const expect = require('chai').expect;
const greeter = require('./greeter');

function test_seneca(done) {
    return Seneca({ log: 'test' })
        .test(done)
        .use(greeter)
}

describe('Greeter service', () => {
    describe('sayHello function', () => {
        it('should return hello with name', (done) => {
            test_seneca(done).act({
                role: 'greeter',
                cmd: 'sayHello',
                name: 'Alex'
            }, function (error, response) {
                expect(response.result).to.eql('Hello Alex');
                done();
            });
        });
    });
});