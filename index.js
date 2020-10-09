// npm init
//npm i express

const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.set('PORT', 27777);
app.get('/', function (req, res, next) {
    console.log(req);
    res.send("HELLO WORLD!");
});

app.use(bodyparser());

app.get('/add', addNumbers)

function addNumbers(req, res, next) {
    let num1 = Number(req.query.number1);
    let num2 = Number(req.query.number2);
    res.send(`Sum of ${num1} and ${num2} = ${num1 + num2}`);
}

app.post('/addAttendance', insertAttendance)

function insertAttendance(req, res, next) {
    try {
        if (req.body.status) {
            console.log("It is true");
        }

        //Do some insert operations in db, maybe analysis.
        res.send({ success: true, msg: "Attendance added successfully" });
    } catch (err) {
        console.log(err);
        res.send({ success: false, msg: "Errored" });
    }
}


app.listen(app.get('PORT'), function () {
    console.log(`App started on server ${app.get('PORT')}`);
});