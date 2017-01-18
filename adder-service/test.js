const Seneca = require('seneca');
const expect = require('chai').expect;
const adder = require('./adder');

function test_seneca(done) {
    return Seneca({ log: 'test' })
        .test(done)
        .use(adder)
}

describe('Adder service', () => {
    describe('sum function', () => {
        it('should return sum of numbers', (done) => {
            test_seneca(done).act({
                role: 'adder',
                cmd: 'sum',
                number1: 12,
                number2: 13
            }, function (error, response) {
                expect(response.result).to.eql(25);
                done();
            });
        });
    });
});