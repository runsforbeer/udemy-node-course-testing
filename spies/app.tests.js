const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); // takes place of require; calls require and add two properties

describe('App', () => {
    var dbSpy = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', dbSpy);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy(); // create the fake dependency
        spy('Andrew',25);

        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call save user with user object', () => {
        var email = 'don.marsh@gmail.com';
        var password = 'password123';

        // the handleSignup method is now no longer using the real db module,
        // but instead the db spy we created above
        app.handleSignup(email, password);

        expect(dbSpy.saveUser).toHaveBeenCalledWith({email,password});
    });
});