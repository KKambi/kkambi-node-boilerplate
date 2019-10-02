const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', function (req, res, next){
    res.format({
        // 새로고침에 의한 브라우저 요청
        'text/html': function () {
            res.sendFile(path.join(__dirname + '/../public/html/index.html'));
        },
        // AJAX 요청
        'application/json': function () {
            console.log("Test b :", a);
            const a = fs.readFileSync('../public/data/index.json', 'utf8')
            res.send(JSON.parse(fs.readFileSync('../public/data/index.json', 'utf8')));
        },
        'default': function () {
            console.log("Test c :");
            // log the request and respond with 406
            res.status(406).send('Not Acceptable');
        }
    })
})

module.exports = router;
