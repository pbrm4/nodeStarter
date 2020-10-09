// npm init
//npm i express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRouter = require('./routers');

app.set('PORT', 3000);

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: false
}));

app.use('/api', mainRouter);




app.listen(app.get('PORT'), function () {
    console.log(`App started on server ${app.get('PORT')}`);
});

module.exports = app;