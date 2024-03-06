var express = require('express');
var router = express();

router.get('/home', (req, res) => {
    res.send('Home Page');
});

router.get('/about', (req, res) => {
    res.send('About');
});

router.listen(3000);






