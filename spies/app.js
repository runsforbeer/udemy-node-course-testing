var db = require('./db'); // this cannot be a const or rewire cannot substitute it for spy

module.exports.handleSignup = (email, password) => {
    // check if email already exists

    // save the user to the database
    db.saveUser({
        email, // ES6 shortcut
        password: password
    });

    // send a welcome email
}