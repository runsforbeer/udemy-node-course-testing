const expect = require('expect');
const utils = require('./utils');

describe('Utils tests', () => {
    // test cases
    describe('#add', () => {
            it('should add two numbers', () => {
                var result = utils.add(33,11);
        
                expect(result)
                    .toBe(44) // assert to be this value
                    .toBeA('number'); // assert to be of this type
            });
        });

    it('should square a number', () => {
        var result = utils.square(3);

        expect(result).toBe(9).toBeA('number');
    });

    it('should async add two number', (don) => {
        utils.addAsync(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');

            don();
        });
    });

    it('should async square a number', (done) => {
        utils.squareAsync(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        })
    })

    it('should expect some values', () => {
        //expect(12).toNotBe(12);
        //expect({name:'Don'}).toEqual({name:'Don'});
        expect([2,3,4]).toInclude(2);
        expect([2,3,4]).toExclude(1);

        expect({
            Name: 'Don',
            Age: 42,
            Location: 'New Hampshire'
        }).toExclude({
            Age:420
        });
    });
    
});

it('should verify full name is set', () => {
    var user = {};
    var result = utils.setName(user, 'Don Marsh');

    expect(result)
        .toEqual(user) // same object pointer, not attributes
        .toInclude({firstName: 'Don'})
        .toInclude({lastName: 'Marsh'})
        .toBeA('object');
});