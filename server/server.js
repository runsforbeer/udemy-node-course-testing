const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'todo app v1.0'
    });
});

app.get('/users', (req,res) => {
    res.status(200).send([
        {name:'don', age:42},
        {name:'cindy', age:43}
    ]);
});

app.listen(3000);

// so we can load this app in the test file
module.exports.app = app;