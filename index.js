// npm init
//npm i express

const express = require('express');
const app = express();

app.set('PORT', 27777);
app.get('/', function (req, res, next) {
    res.send("HELLO WORLD!");
})

app.listen(app.get('PORT'), function () {
    console.log(`App started on server ${app.get('PORT')}`);
});