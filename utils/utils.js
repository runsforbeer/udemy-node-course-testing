module.exports.add = (a,b) => a + b; // shorthand for single-expression

module.exports.addAsync = (a,b,cb) => {
    setTimeout(() => {
        cb(a+b);
    }, 1000);
};

module.exports.square = (x) => x * x;

module.exports.squareAsync = (x,cb) => {
    setTimeout(() => {
        cb(x*x);
    }, 1000);
}

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
};